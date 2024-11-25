import clientPromise from "@/lib/Mongodb"

export async function POST(request) {

    const body =  await request.json()
    // const client = await clientPromise
    // const db = client.db("shorturl")
    // const collection = db.collection("url")

    // const doc = await collection.findOne({shorturl: body.shorturl})
    // if(doc){
    //     return Response.json({ success:false, error:true , message: 'url already exists!' })
    // }

    // const result = await collection.insertOne({
    //     url: body.url,
    //     shorturl:body.shorturl
    // })

    // return Response.json({ success:true, error:false , message: 'url generated successfully' })


    const client = await clientPromise;
    const db = client.db("quick-links");
    const collection = db.collection("url");
  
    const doc = await collection.findOne({ shortUrl: body.shortUrl });
  
    if (doc) {
      return Response.json({
        message: "URL already exists!",
        success: false,
        error: true,
      });
    }
  
    const result = await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    });
    return Response.json({
      message: "URL generated Successfully",
      success: true,
      error: false,
    });
  }