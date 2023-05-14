import apiRequest from './index';

const RESOURCE = '/search';

const getSuggestedSearchList = async (keyword: string, page: number) => {
  try {
    const response = await apiRequest.get(`${RESOURCE}?q=${keyword}&page=${page}`);
    return response;
  } catch (error) {
    throw new Error('API getSuggestedSearchList error');
  }
};

export default getSuggestedSearchList;
