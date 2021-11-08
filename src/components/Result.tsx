import React, {useEffect, useRef} from 'react';
import './Board.css';
import forHer from './templates/for_her.png';

interface ResultProps {
    imageList: string[]
}

function Result(props: ResultProps) {

    const templateWidth = 1024
    const templateHeight = 769
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    function renderImage(ctx: CanvasRenderingContext2D, imageUrl: string, xSc: number, ySc: number, sX: number, sY: number) {

        let image = new Image()
        image.src = imageUrl
        let hRatio = (ctx!.canvas.width / xSc) / image.width
        let vRatio = (ctx!.canvas.height / ySc) / image.height
        let ratio = Math.min(hRatio, vRatio)

        image.onload = function () {
            ctx!.drawImage(
                image, 0, 0,
                image.width, image.height,
                ctx!.canvas.width * sX, ctx!.canvas.height * sY,
                image.width * ratio, image.height * ratio)
            ctx!.beginPath();
            ctx!.stroke();
        }
    }

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.style.width = '100%';
            canvasRef.current.style.height = '100%';
            canvasRef.current!.width = templateWidth
            canvasRef.current!.height = templateHeight

            canvasCtxRef.current = canvasRef.current.getContext('2d')
            let ctx = canvasCtxRef.current
            let template = new Image()
            let hRatio = ctx!.canvas.width / templateWidth
            let vRatio = ctx!.canvas.height / templateHeight
            let ratio = Math.max(hRatio, vRatio)

            renderImage(ctx!, props.imageList[0], 2, 3, 0.07, 0.4)

            template.onload = function () {
                ctx!.drawImage(
                    template, 0, 0,
                    templateWidth, templateHeight,
                    0, 0,
                    templateWidth * ratio, templateHeight * ratio)
                ctx!.beginPath();
                ctx!.moveTo(0, 0);
                ctx!.stroke();
            }
            template.src = forHer;
        }
    }, [props.imageList]);

    function onGenerate() {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d');
            let ctx = canvasCtxRef.current;
            let a = document.createElement("a");
            a.download = "do_it_for_her.png";
            a.href = ctx!.canvas.toDataURL("image/png");
            a.click();
        }
    }

    return (
        <div className={"result-container"}>
            <ul>
                <li>
                    <canvas ref={canvasRef} className="canvas"></canvas>
                </li>
                <li>
                    <button type="button" onClick={onGenerate}>Generate</button>
                </li>
            </ul>
        </div>
    );
}

export default Result;
