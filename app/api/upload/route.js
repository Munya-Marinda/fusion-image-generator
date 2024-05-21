import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  //
}

// To handle a POST request to /api
export async function POST(request) {
  const formData = await request.formData();
  // const file = formData.get("file");
  // const uploadToCloudinary = formData.get("uploadToCloudinary");

  // if (uploadToCloudinary === "1" && file) {
  //   await uploadToCloudinary(file);
  // }

  return NextResponse.json(
    { message: "Hello World", result: request },
    { status: 200 }
  );
}

// Same logic to add a `PATCH`, `DELETE`...
