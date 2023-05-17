import { supabase } from "./client";

export default async function createQR(obj: Object){
    const {data, error} = await supabase.from("qr_metadata").insert(obj)
    return error ? error : data
}

function generateRandomId(length) {
    // String containing all allowable characters for the ID
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
    let id = '';
  
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      id += characters[index];
    }
  
    return id;
  }

export async function generateKey(){
    // Recursive function till the random key generates
    const key = generateRandomId(7);
    const {data: response, error} = await supabase.from("qr_metadata").select("qr_slug").eq("qr_slug", key)
    if(!response){
      // if the key experience collision with duplicates
      return await generateKey();
    }else{
      return key
    }
        
}

export async function fetchUserCreatedLinks(uid: String){
  const {data: res, error} = await supabase.from("qr_metadata").select("*").eq("qr_userid", uid).order('id', {ascending: false})
  return res
}

export async function deleteQR(qrId: String){
  const {data: res, error} = await supabase.from("qr_metadata").delete().eq("qr_id", qrId)
  return !error
}