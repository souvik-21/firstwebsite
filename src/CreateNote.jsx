import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote=(props)=>{
    const[expand,setExpand]=useState(false);
    const [note,setNote]=useState(
        {
            title:'',
            content:''
        });
    const inputEvent=(event)=>{
        const {value,name}=event.target;
        setNote((prevData)=>{
            return {
                ...prevData,//this is called spread operator....
                [name]:value

            }
        })
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:''
        })
    };
    const expandIt=()=>{
        setExpand(true);
    }
    const backToNormal=()=>{
        setExpand(false);
    }

    return(
        <>
        <div className='main_note'  onDoubleClick={backToNormal}>
            <form>
                {expand?
                <input 
                type="text" 
                name='title'
                value={note.title} 
                onChange={inputEvent} 
                placeholder='Title' 
                autoComplete='off'/>:null}
                <textarea 
                name="" id="" cols="" rows="" 
                name='content'
                value={note.content} 
                onChange={inputEvent} 
                placeholder='Write a note...'
                onClick={expandIt}>
                </textarea>
                {expand?
                <Button onClick={addEvent}>
                    <AddIcon className='plus_sign'/>
                </Button>:null}
            </form>
        </div>
        </>
    );
};
export default CreateNote;