
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Постты алу мүмкін емес')
        }
        const json = await response.json();
        console.log(json);
    }
    catch (error){
        console.error('Қате пайда болды ', error);
    }
}
