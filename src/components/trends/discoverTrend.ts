export async function DiscoverTrend() {
    try {
        const response = await fetch("http://localhost:5301/trends", {
          method: 'GET',
          headers: {}
        });
      
        if (response.ok) {
          const result = await response.json();
          console.log(result);
        }
      } catch (err) {
        console.error(err);
      }
}