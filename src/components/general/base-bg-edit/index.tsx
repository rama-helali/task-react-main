import React, { useContext, useEffect, useState } from 'react';
import styles from "./style.module.scss";
import { Row, Col } from 'antd';
import AppContext from '../../../context/app/context';
import EditContext from '../../../context/edit/context';
import CardGeneral from '../card';
import { useDrop } from "react-dnd";

const ItemType = {
    CARD: "card",
};

const BaseBagEdit: React.FC = () => {
    const { widghets, actions } = useContext(EditContext);
    const [Rows, setRows] = React.useState<number[]>([]);
    const [Cols, setCols] = React.useState<number[]>([]);
    const { collapsed } = useContext(AppContext);

    const [cards, setCards] = useState(widghets);

    // Update cards when new widgets are added
    useEffect(() => {
        setCards([...widghets]); // Sync state with context
    }, [widghets]);

    const isBetween = (value: number, min: number, max: number) => {
        return value >= min && value <= max;
    };

    const [, drop] = useDrop({
        accept: ItemType.CARD,
        drop: (item: { id: number }, monitor) => {
            const offset = monitor.getSourceClientOffset();
            if (!offset) return;
            if (widghets.length > 0 && offset.x && offset.y) {
                const existingWidget = widghets.find(el =>
                    isBetween(offset.x, el.locationX ?? 0, el?.locationX ?? 0 + 340) ||
                    isBetween(offset.y, el.locationY ?? 0, el.locationY ?? 0 + 200)
                );
                widghets?.map((el) => {
                    console.log(widghets, offset.x ,existingWidget)
                    if (el.id === item.id && el.locationX) {
                        if (!existingWidget) {
                            setCards((prevCards) =>
                                prevCards.map((el) =>
                                    el.id === item.id ? { ...el, locationX: offset.x, locationY: offset.y } : el
                                )
                            );
                            actions.editWidghets({ ...el, locationX: offset.x, locationY: offset.y });
                        } else {

                            actions.editWidghets({ ...el, locationX: el.locationX, locationY: el.locationY });
                        }
                    }
                    if (el.id === item.id && !el.locationX) {
                        actions.editWidghets({ ...el, locationX: offset.x, locationY: offset.y });
                    }
                    return el;
                });
            }
        },
    });

    useEffect(() => {
        const totalRows = Math.floor(window.innerHeight / 36);
        const totalCols = Math.floor(window.innerWidth / 36);
        setRows(Array.from({ length: totalRows }, (_, index) => index));
        setCols(Array.from({ length: totalCols }, (_, index) => index));
    }, [collapsed]);

    useEffect(() => {
        const totalRows = Math.floor(window.innerHeight / 36);
        const totalCols = Math.floor(window.innerWidth / 36);
        setRows(Array.from({ length: totalRows }, (_, index) => index));
        setCols(Array.from({ length: totalCols }, (_, index) => index));
    }, [collapsed]);

    return (
        <div className={styles.container}>
            {/* Background Circles */}
            <div className={styles.bgContainer}>
                {Rows.map((rowIndex) => (
                    <Row key={rowIndex}>
                        {Cols.map((colIndex) => (
                            <Col key={colIndex}>
                                <div
                                    className={styles.bgCircle}
                                    style={{
                                        width: collapsed == "close" ? "30px" : "25px",
                                        height: collapsed == "close" ? "30px" : "25px",
                                        border: "1px solid #CBCBCB",
                                        margin: "2px 2px",
                                    }}
                                ></div>
                            </Col>
                        ))}
                    </Row>
                ))}
            </div>

            {/* Page Items */}

            <div ref={drop} className={styles.content}>
                <div style={{ display: "flex", zIndex: 1, position: "relative", flexWrap: "wrap" }}>  {cards?.map((el: any) => {
                    return (
                        <CardGeneral key={el.id}
                            id={el?.id}
                            image={'image.png'}
                            description={el?.description ?? "--"}
                            title={el?.title ?? "---"}
                            x={el?.locationX}
                            y={el?.locationY}
                        />

                    )
                })
                }
                </div>
            </div>
        </div>
    );
};

export default BaseBagEdit;
