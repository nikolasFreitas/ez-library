export const randomDate = (start, end) => 
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const formatDate = (date) => {
  const data = new Date(date);
  return  (("0" + data.getDate()).substr(-2) + "/" 
    + ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear());

}