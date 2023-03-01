import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";



import "./styles.css";

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

const comment1 = `<div class="d-flex align-items-center"><div class="program-icon pink">6C</div><p class="ps-2 larger">States collect these data on their specified Child Count date.</p></div>`


const comment2 = `<div class="d-flex align-items-center"><div class="program-icon orange">6B</div><p class="ps-2 larger">States submit data via EDFacts on or before due date.</p></div>`

const comment3 = `<div class="d-flex align-items-center"><div class="program-icon teal">6F</div><p class="ps-2 larger">States clean, review, and validate data.</p></div>`

const comment4 = `<div class="d-flex align-items-center"><div class="program-icon seafoam">6A</div><p class="ps-2 larger">States review and respond to OSEP's data quality reports.</p></div>`

const comment5 = `<div class="d-flex align-items-center"><div class="program-icon purple">6K</div><p class="ps-2 larger">States collect EDFacts file data elements in various ways.</p></div>`

const comment6 = `<div class="d-flex align-items-center"><div class="program-icon navy">6P</div><p class="ps-2 larger">Separate special education class or residential facility.</p></div>`




const tasks = [
  { id: "1", content: <div dangerouslySetInnerHTML={{__html:comment1}} /> },
  { id: "2", content: <div dangerouslySetInnerHTML={{__html:comment2}} /> },
  { id: "3", content: <div dangerouslySetInnerHTML={{__html:comment3}} /> },
  { id: "4", content: <div dangerouslySetInnerHTML={{__html:comment4}} /> },
  { id: "5", content: <div dangerouslySetInnerHTML={{__html:comment5}} /> },
  { id: "6", content: <div dangerouslySetInnerHTML={{__html:comment6}} /> },
  { id: "7", content: <div dangerouslySetInnerHTML={{__html:comment3}} /> },
  { id: "8", content: <div dangerouslySetInnerHTML={{__html:comment2}} /> },
  { id: "9", content: <div dangerouslySetInnerHTML={{__html:comment5}} /> },
  { id: "10", content: <div dangerouslySetInnerHTML={{__html:comment6}} /> },
  { id: "11", content: <div dangerouslySetInnerHTML={{__html:comment3}} /> },
  { id: "12", content: <div dangerouslySetInnerHTML={{__html:comment1}} /> },
];

const taskStatus = {
  first: {

    items: tasks,

  },


  requested: {
    name: "Collecting Data",
    image: "https://ixd-studio.wesdemo.com/idc-preschool/static/media/Collect-data.77f54676.svg",
    items: [],

  },
  toDo: {
    name: "Preparing Data",
    image:"https://ixd-studio.wesdemo.com/idc-preschool/static/media/EdFactsduedate.59f741d8.svg",
    items: []
  },
  inProgress: {
    name: "Submitting Data",
    image:"https://ixd-studio.wesdemo.com/idc-preschool/static/media/Data-Validation.6cd52811.svg",
    items: []
  },
  done: {
    name: "Address Data Issues",
    image:"https://ixd-studio.wesdemo.com/idc-preschool/static/media/OSEPValidation.f88f1cea.svg",
    items: []
  }
};



function App() {



  const [columns, setColumns] = useState(taskStatus);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);



      // setColumns((prev) => ({
      //     ...prev,
      //     [source.droppableId]: {
      //       ...sourceColumn,
      //       items: sourceItems,
      //     },
      //     [destination.droppableId]: {
      //       ...destColumn,
      //       items: destItems,
      //     },
      //   }));
      //



      setColumns(prevColumns => {
      const updatedColumns = Object.assign({}, prevColumns);
      updatedColumns[source.droppableId] = Object.assign({}, updatedColumns[source.droppableId], {
      items: sourceItems
      });
      updatedColumns[destination.droppableId] = Object.assign({}, updatedColumns[destination.droppableId], {
      items: destItems
      });
      return updatedColumns;
      });

      //
      // setColumns({
      //       ...columns,
      //       [source.droppableId]: {
      //         ...sourceColumn,
      //         items: sourceItems
      //       },
      //       [destination.droppableId]: {
      //         ...destColumn,
      //         items: destItems
      //       }
      //     });




      // setColumns(prev => {
      // const newColumns = Object.assign({}, prev);
      // newColumns[source.droppableId] = value;
      //
      //
      //
      // });




          // setColumns({
          //       ...columns,
          //       [source.droppableId]: {
          //         ...sourceColumn,
          //         items: sourceItems
          //       },
          //       [destination.droppableId]: {
          //         ...destColumn,
          //         items: destItems
          //       }
          //     });


    }


  };



  return (
    <div>
      <Container fluid className="mb-5 pt-3 position-relative">

  <div className="d-flex justify-content-center align-items-center">
      <h1 className="text-center">Preschool Environments Data Timeline</h1>
      <img src="https://ixd-studio.wesdemo.com/idc-preschool/static/media/Public-preK.0834facd.svg" className="img-resonsive logo"></img>
</div>

          <Row className="marginTop">

        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (

               <Col xs={12} sm={6} md={2}>


              <div key={columnId} class="tiles">
              <div className="d-flex justify-content-start align-items-center largeMargin">
                  <img src={column.image} className="img-responsive cute pe-3"></img>
                  <div className="d-flex flex-column"><h4>{column.name}</h4>

                  </div>
                  </div>

                  <div className="bubbles">

                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                          background: snapshot.isDraggingOver
                            ? "transparent"
                            : "transparent",
                          padding: 0,
                          width: "100%",
                          minHeight: 500
                        }}

                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                                className="drag"
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}

                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>

                      );
                    }}
                  </Droppable>
                  </div>
                    </div>
              </Col>


            );
          })}
        </DragDropContext>
            </Row>
      </Container>
    </div>
  );
}

export default App;
