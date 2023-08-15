// react hook form / hook form input Options
import { useForm } from "react-hook-form"
import { searchQueryOptions } from "./InputOptions"

// toast / svg icon
import { toast } from "react-toastify"
import { AiOutlineSearch } from 'react-icons/ai'

// emotion
import { SearchbarForm, Input, Button } from "./Searchbar.styled"


const Searchbar = ({ onSubmitForm }) => {

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      searchQuery: ''
    }
  })

  const onSubmit = (data) => {
    
    if (!data.searchQuery) {
      return toast.warning(`Search field cannot be empty`)
    }

    onSubmitForm(data.searchQuery.toLowerCase())
    reset()
  }

  return (
    <SearchbarForm onSubmit={handleSubmit(onSubmit)}>

      <Button type="submit">
        <AiOutlineSearch  size={20} />
      </Button>

      <Input
        type="text"
        {...register('searchQuery', searchQueryOptions)}
        placeholder="Search images and photos"
        autoComplete="off"
      />
      
    </SearchbarForm>
  )
}

export default Searchbar
