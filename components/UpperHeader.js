import { motion } from "framer-motion";

function UpperHeader({ text }) {
    return (
        <div className="h-5 bg-header">
            <div className="window-buttons flex pt-1 " >
                <div className="red button w-2 h-2 ml-2 bg-red rounded-full rounded-btn flex items-center justify-center"> </div>
                <div className="yellow button w-2 h-2 ml-2 bg-yellow rounded-full rounded-btn flex items-center justify-center"> </div>
                <div className="green button w-2 h-2 ml-2 bg-green rounded-full rounded-btn flex items-center justify-center"> </div>
             
            </div>
        </div>

    );
}

export default UpperHeader;
