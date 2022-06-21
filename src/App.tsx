import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);
  console.log('🚀 ~ data', data);

  return <h1 className="text-5xl">Hello world</h1>;
}

export default App;
