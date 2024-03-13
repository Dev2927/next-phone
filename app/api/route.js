export async function GET() {
 console.log('srgfr');
 
 const req = await fetch("http://localhost:11002/login", {"method": "POST"})
 const data = await req.json();
//  console.log(data);
 
  return Response.json({data})
}