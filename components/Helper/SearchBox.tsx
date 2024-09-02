import * as Dialog from '@radix-ui/react-dialog';
import { SearchIcon } from 'lucide-react';
import React from 'react';

function SearchBox() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <SearchIcon size={26} cursor={"pointer"} />
      </Dialog.Trigger>
      <Dialog.Content>
        <form>
          <input
            type="text"
            placeholder="Search product"
            className="block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none"
          />
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default SearchBox;
