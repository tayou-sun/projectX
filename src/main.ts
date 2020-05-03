// this import should be first in order to load some required settings (like globals and reflect-metadata)
require ("nativescript-plugin-firebase");
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
