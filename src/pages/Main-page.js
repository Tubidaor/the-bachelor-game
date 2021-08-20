import React, { useState } from 'react'
import { players } from '../Data'
import Contestants from '../components/contestants'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function Mainpage() {

    console.log(players)
    const [characters, updateCharacters] = useState(players)
    const contestants = characters.map((player,index) => {
      return (
      <Draggable key={player.id} draggableId={player.id.toString()} index={index}>
        {(provided) => (
          <Contestants
          provided={provided}
          // innerRef={provided.innerRef}
          // draggable={provided.DraggableProps}
          // dragHandle={provided.dragHandleProps}
          // {...provided.draggableProps}
          // {...provided.dragHandleProps} 
          id={player.id}
          name={player.firstName}
          score={player.score.week2}
          />
        )}
      
      </Draggable>
      )}
    )

    function handleOnDragEnd(result) {
      if(!result.destination) return

      const items = Array.from(characters)
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)

      updateCharacters(items)
    }
console.log(contestants)
//needs to be a table. slot/contestant/action(drop/replace)/score
//first section is starters. need a separate table on db to save starters?
//second section is available contestants. this can be full list on db, and made
//change based on contestants that are shown. Can be based on Id.

    return (
      <div>
        Mainpage
        <h2> Starters </h2>
        <table>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="contestants">
              {(provided) => (
                <tbody className="contestants"
                {...provided.droppableProps}
                ref={provided.innerRef}
                >
                  <tr>
                    <th>
                      Drop
                    </th>
                    <th>
                      Position
                    </th>
                    <th>
                      Contestant
                    </th>
                    <th>
                      Score
                    </th>
                  </tr>
                  {contestants}
                  {provided.placeholder}
                </tbody>
            )}
            </Droppable>
          </DragDropContext>

        </table>
        <h2> Available Contestants </h2>
        <table>
          <tbody>
            <tr>
              <th>
                Add
              </th>
              <th>
                Position
              </th>
              <th>
                Contestant
              </th>
              <th>
                Score
              </th>
            </tr>
            {/* {contestants} */}

          </tbody>
        </table>
      </div>
    )

}