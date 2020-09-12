const request = require('node-superfetch');

class giphyAPI {
  constructor(key) {
 
  this.key = key;  
    
  if(!this.key) throw new Error('Key Girilmemiş!');
 }
  
  async search() {
    if (!query) throw new Error("Bir Şeyler Girmeniz Gerek")
  const { body } = await request.get("http://api.giphy.com/v1/gifs/search?api_key=" + this.key + "&q=" + query);
  if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);  
  return body;
  }
  async get_id(id) {
    if (!id) throw new Error("Bir Şeyler Girmeniz Gerek")
  const { body } = await request.get("http://api.giphy.com/v1/gifs/+"+ id +"+?api_key=" + this.key);
  if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);  
  return body;
  }
  async translate() {
    if (!query) throw new Error("Bir Şeyler Girmeniz Gerek")
  const { body } = await request.get("http://api.giphy.com/v1/gifs/translate?api_key=" + this.key + "&s=" + query);
  if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);  
  return body;
  }
  async random(tag) {
    if (!tag) throw new Error("Bir Şeyler Girmeniz Gerek")
  const { body } = await request.get("http://api.giphy.com/v1/gifs/translate?api_key=" + this.key + "&tag=" + tag);
  if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);  
  return body;
  }
  async trend() {
  const { body } = await request.get("http://api.giphy.com/v1/gifs/translate?api_key=" + this.key);
  if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);  
  return body;
  }
}
module.exports = giphyAPI;