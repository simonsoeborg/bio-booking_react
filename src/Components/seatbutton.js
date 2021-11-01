import { makeAutoObservable, observable } from "mobx"
import {useState} from 'react'

const SeatButton = ( {button, onToggle})