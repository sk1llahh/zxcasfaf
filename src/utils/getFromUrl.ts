let location = window.location.href;

let locationWithoutHash = location
  // .replace('#', '/')
export const getFromUrl = (value:string) => {
  const url = new URL(locationWithoutHash).searchParams.get(value)

  return url
}