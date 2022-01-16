import Head from 'next/head'
import Link from 'next/link'
import SE_styles from '../../styles/SimpleEncryption.module.scss'
import {useState,useEffect} from 'react'

export default function SimpleEncryption(props) {
  const enc = require('../../hzmodules/CharacterEncryption.js');
  const [stringInput, setStringInput] = useState("");
  const [keyInput, setKeyInput] = useState(0);
  const [stringOutput, setStringOutput] = useState("");
  const [encryptMode, setEncryptMode] = useState(true);

  //useEffect run every render
  useEffect(() => {
    if(keyInput>0){
      if(encryptMode){
        setStringOutput(enc.encryptString(stringInput,keyInput));
      } else {
        setStringOutput(enc.decryptString(stringInput,keyInput));
      }
    } else {
      setStringOutput("Invalid Input");
    }
  } , [keyInput, encryptMode, enc, stringInput])

  //setting the state is asynchronous
  const textBoxChanged = (e) => {
    setStringInput(e.target.value);
  }
  const keytextChanged = (e) => {
    setKeyInput(parseInt(e.target.value));
  }
  const encdecToggleChanged = (e) => {
    setEncryptMode(!e.target.checked);
  }
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(stringOutput);
  }

  return (<>
    <Head>
        <title>HZ Apps - Simple Encryption</title>
    </Head>

    
    <div className={'hzcontainer'}>
      <br /><br /><br />
      <div className={'hzrow'}>
        <h1 className={SE_styles.title}>Simple Encryption</h1>
      </div>
      <br />
      <div className={'hzrow'}>

        <div className={'hzcolumn'}>
          <div className={'hzrow'}>
            <span className={SE_styles.inputlabel}>Input:</span>
          </div>
          <div className={'hzrow'}>
              <textarea
                type="text"
                className={'hzcard'+' '+SE_styles.input}
                placeholder="Type here..."
                name="inputstring"
                onChange={textBoxChanged}
              />
          </div>
          <div className={'hzrow'}>
              <input
                type="text"
                className={keyInput>0 ? ('hzcard'+' '+SE_styles.inputkey):('hzcard'+' '+SE_styles.inputkey+' '+SE_styles.invalid)}
                name="inputkey"
                placeholder="Key (Positive Integer)"
                onChange={keytextChanged}
              />
          </div>
        </div>

        <div className={'hzcolumn'+' '+SE_styles.hzlocksize}>
          <div className={'hzrow'}>
            <span className={SE_styles.inputlabel}>Output:</span>
          </div>
          <div className={'hzrow'}>
            <div className={'hzcard'+' '+SE_styles.output}>
              <p>{stringOutput}</p>
            </div>
          </div>

        </div>

      </div>
      <br />
      <div align="right">
        <button onClick={copyToClipboard} className={'hzabtn'}>Copy Output</button>&nbsp;&nbsp;&nbsp;
      </div>
      <div className={'hzrowunresponsive'}>
        <div className={'hzcolumn'}>
          <span>&nbsp;&nbsp;&nbsp;<input 
            type="checkbox"
            onChange={encdecToggleChanged}
          />
            &nbsp;Decrypt Mode
          </span>
        </div>
      </div>


      
      <br />

      
    </div>
  </>)


}
