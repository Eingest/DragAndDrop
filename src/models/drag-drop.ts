namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    // permits the drop:
    dragOverHandler(event: DragEvent): void;
    // handles the drop / updates data in ui
    dropHandler(event: DragEvent): void;
    // visual feedback
    dragLeaveHandler(event: DragEvent): void;
  }
}
