import axios from 'axios';

export const searchPics = async (search, page = 1) => {
  const {data} = await axios.get(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=31949771-48fdcb68c08d8feee87a80e68&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data.hits;
};