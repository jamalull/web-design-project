export const getSonglists = async () => {
  try {
    const results = await fetch("http://localhost:3000/api/songs")
    const data = await results.json();
    console.log(data)
  }
  catch(e){
    console.log(e)
  }
}