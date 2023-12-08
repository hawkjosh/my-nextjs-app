const dataUrl = process.env.JSON_SERVER_URL

async function getPosts() {
	const res = await fetch(`${dataUrl}/posts?_sort=date&_order=desc`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-cache',
	})
	return res.json()
}

async function getSinglePost(id) {
	const res = await fetch(`${dataUrl}/posts/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-cache',
	})
	return res.json()
}

async function addPost(post) {
  const res = await fetch(`${dataUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
    cache: 'no-cache',
  })
  return res.json()
}

async function editPost(id, post) {
	const res = await fetch(`${dataUrl}/posts/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(post),
		cache: 'no-cache',
	})
	return res.json()
}

async function deletePost(id) {
	const res = await fetch(`${dataUrl}/posts/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		cache: 'no-cache',
	})
	return
}


export { getPosts, getSinglePost, addPost, deletePost }
