import { Routes } from '@angular/router';
import { StringAndPropertyComponent } from './course/string-and-property/string-and-property.component';
import { ClassBindingComponent } from './course/class-binding/class-binding.component';
import { StyleBindingComponent } from './course/style-binding/style-binding.component';
import { EventBindingComponent } from './course/event-binding/event-binding.component';
import { EventFilteringIComponent } from './course/event-filtering-i/event-filtering-i.component';
import { EventFilteringIIComponent } from './course/event-filtering-ii/event-filtering-ii.component';
import { TemplateVariableComponent } from './course/template-variable/template-variable.component';
import { NameAndAgeComponent } from './course/name-and-age/name-and-age.component';

export const routes: Routes = [
    {
      path: 'string-and-property',
      component: StringAndPropertyComponent
    },
    {
      path: 'class-binding',
      component: ClassBindingComponent
    },
    {
      path: 'style-binding',
      component: StyleBindingComponent
    },
    {
      path: 'event-binding',
      component: EventBindingComponent
    },
    {
      path: 'event-filtering-i',
      component: EventFilteringIComponent
    },
    {
      path: 'event-filtering-ii',
      component: EventFilteringIIComponent
    },
    {
      path: 'template-variable',
      component: TemplateVariableComponent
    },
    {
      path: 'name-and-age',
      component: NameAndAgeComponent
    },

];
