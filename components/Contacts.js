import React from 'react';

export default function Contacts(props){
    const displayContacts =  (props) => {
            const {notes} = props;

        if (notes.length > 0){
            return(notes.map((note, index) => {
                console.log(note);
                return(

                    <Text>{note.firstName} {note.lastName}</Text>

                )
            })
            )
        }
        else{
            return(<Text>no contacts yet</Text>)
        }
    }
    return(
        <>
        {displayContacts(props)}
        </>
    )
}