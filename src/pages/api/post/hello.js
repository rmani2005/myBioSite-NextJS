// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'Manikandan Ravi' })
  }
  else if (req.method === 'POST') {
    // Process a POST request
    res.status(201).json({ name: 'Dummy Post' })
  }
  else if (req.method === 'PUT') {
    // Process a POST request
    res.status(201).json({ name: 'Dummy Put' })
  }
  else if (req.method === 'DELETE') {
    // Process a POST request
    res.status(201).json({ name: 'Dummy Delete' })
  }
   else {
    // Handle any other HTTP method
  }
}