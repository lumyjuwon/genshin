export function ApplyMeta(title: string, content: string) {
  document.title = title;
  const meta = document.getElementsByName('description')[0];
  if (meta) {
    //@ts-ignore
    meta.content = content;
  } else {
    console.log("Can't Find Meta Content");
  }
}
