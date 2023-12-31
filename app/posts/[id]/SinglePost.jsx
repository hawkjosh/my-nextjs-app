import Link from 'next/link'
import dayjs from 'dayjs'
import { Users, Posts } from '@/api/routes'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default async function SinglePost({ params }) {
	const post = await Posts.getOne(params.id)
	const userData = await Users.getOne('id', post.userId)
	
	const { id: userId, username, email} = userData[0]

	return (
		<Card>
			<div className="pb-6 text-2xl font-bold text-center underline">
				Post Details
			</div>
			<div className="flex flex-col gap-6">
				<div className='flex flex-col gap-2'>
					<div>Post Info</div>
					<div className="flex items-center gap-3">
						<div className="font-semibold uppercase">ID:</div>
						<div className="text-blue-600">{post.id}</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="font-semibold uppercase">Date:</div>
						<div className="text-blue-600">
							{dayjs(post.date).format('ddd, M/D/YY')}
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="font-semibold uppercase">Content:</div>
						<div className="text-blue-600">{post.content}</div>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<div>Author Info</div>
					<div className="flex items-center gap-3">
						<div className="font-semibold uppercase">User ID:</div>
						<div className="text-blue-600">{userId}</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="font-semibold uppercase">Username:</div>
						<div className="text-blue-600">{username}</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="font-semibold uppercase">Email:</div>
						<div className="text-blue-600">{email}</div>
					</div>
				</div>
				<Link href="/posts" className="mt-6 place-self-center">
					<Button label="Back to Posts" btnStyle="btn" />
				</Link>
			</div>
		</Card>
	)
}
