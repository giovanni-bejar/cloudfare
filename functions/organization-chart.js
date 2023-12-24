export async function onRequestPost(context) {
    const { request } = context;
    
    // Forward the request to the Worker
    const workerResponse = await fetch('https://coding-assignment.giovannibejar122.workers.dev/organization-chart', {
      method: 'POST',
      headers: request.headers,
      body: await request.text(),
    });
  
    return workerResponse;
  }
  