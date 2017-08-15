import { EmbeddedSortableComponent } from './dnd/embedded-sortable.component';
import { SimpleSortableCopyComponent } from './dnd/simple-sortable-copy.component';
import { RecycleMultiSortableComponent } from './dnd/recycle-multi-sortable.component';
import { SimpleSortableHandleComponent } from './dnd/simple-sortable-handle.component';
import { SimpleSortableComponent } from './dnd/simple-sortable.component';
import { ShoppingBasketDndComponent } from './dnd/shoping-basket-dnd.component';
import { CustomFunctionDndComponent } from './dnd/custom-function-dnd.component';
import { CustomDataDndComponent } from './dnd/custom-data-dnd.component';
import { ZoneDndComponent } from './dnd/zone-dnd.component';
import { SimpleDndHandleComponent } from './dnd/simple-dnd-handle.component';
import { SimpleDndComponent } from './dnd/simple-dnd.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { DndModule } from 'ng2-dnd';
import { dragDropRoutes } from './drag-drop.routes';
import { DragDropComponent } from './drag-drop-demo.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(dragDropRoutes),
		FormsModule,
		DndModule.forRoot()
	],
	declarations: [
		DragDropComponent,
		SimpleDndComponent,
		SimpleDndHandleComponent,
		ZoneDndComponent,
		CustomDataDndComponent,
		CustomFunctionDndComponent,
		ShoppingBasketDndComponent,
		SimpleSortableComponent,
		SimpleSortableHandleComponent,
		RecycleMultiSortableComponent,
		SimpleSortableCopyComponent,
		EmbeddedSortableComponent,
	]
})
export class DragDropModule { }
