import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { SearchIcon } from 'lucide-react';
import React from 'react';

function SearchBox() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
            <SearchIcon size={26} cursor={"pointer"}/>
        </DialogTrigger>
      </Dialog>
    </div>
  )
}

export default SearchBox
