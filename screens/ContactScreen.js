import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

import Axios from 'axios';

import {useEffect, useState} from 'react';

import { settings } from '../config/config';



const ContactScreen = () => {

  useEffect(() => {

    Axios.get(settings.baseAPI+"contacts").then((response) => {

     console.log(response.data);

    });

   },

   []);

   return (

   <div className='ContactScreen'> </div>)

  }

export default ContactScreen;



const styles = StyleSheet.create({});