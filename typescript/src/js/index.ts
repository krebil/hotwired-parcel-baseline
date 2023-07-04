import { Application } from "@hotwired/stimulus"
import * as Turbo from "@hotwired/turbo"
//this is a glob import to get all the controllers, like require.context in webpack
import * as files from "./controllers/**/*.ts"
import {definitionsFromContext} from "@krebil/parcel-stimulus-automagic";

declare global {
    interface Window {
        Stimulus:any;
    }
}

let f = definitionsFromContext(files)

//Starts stimulus
let Stimulus = Application.start()
//TODO Remove in production
Stimulus.debug = true;
//Loads in controller in folder "files"
Stimulus.load(f)
//Starts turbo
Turbo.start()