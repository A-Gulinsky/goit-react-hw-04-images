import { useState } from 'react';

// components
import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery'

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// emotion
import { Container ,Header ,Main } from './App/app.styled';
import { useEffect } from 'react';

// api
import fetchAPI from './services/api';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [totalHits, setTotalHits] = useState(0)
  const [hits, setHits] = useState([])
  const [page, setPage] = useState(1)
  const [loader, setLoader] = useState(false)

  useEffect(() => {

    if(!searchQuery) {
      return;
    }

    setLoader(true)

    const fetchData = async () => {
      try {
        const data = await fetchAPI(searchQuery, page);

        if (!data.hits.length) {
          throw new Error(`No results found for your search`)
        }
        
        setTotalHits(data.totalHits)
        setHits((prev) => [...prev, ...data.hits]);

      } catch (error) {
        console.log(error)
        toast.error(error.message)
      } finally {
        setLoader(false)
      }
    }; 

    fetchData()
  }, [searchQuery, page]);
  
  const handleOnSubmit = (query) => {
    setSearchQuery(query)
    setTotalHits(0)
    setHits([])
    setPage(1)
    setLoader(false)
  }

  const handleNextPage = () => {
    setPage(prev => prev + 1)
  }

    return (
      <Container>

        <Header>
          <Searchbar onSubmitForm={handleOnSubmit} />
        </Header>
        
        <Main>
          <ImageGallery onChangePage={handleNextPage} useStates={{totalHits,hits,loader}} />
        </Main>

        <ToastContainer autoClose={3000} theme="dark" />
        
      </Container>
    )
  }

export default App