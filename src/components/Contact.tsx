export default function Contact() {
  return (
  <div>
    <form>
      <h1>Contact</h1>
      <input type="text" name="Name" placeholder="Name"/>
      <input type="text" name="Email" placeholder="Email"/>
      <textarea name="Message" placeholder="Message" rows={10}/>
      <button type="button">Work with me</button>
    </form>
  </div>
  );
}