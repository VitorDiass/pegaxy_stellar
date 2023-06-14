import React from "react";
import { Changelog } from "../changelog";
import CardInfoComponent from "../component/cardInfo";
import LayoutComponent from "../component/layout";
import StatusBarComponent from "../component/statusbar";

const ChangelogPage = () => {
    return (
        <LayoutComponent>
            <StatusBarComponent gobackprop={true} />
            <CardInfoComponent>
                <div className="flex tracking-wider text-xl">CHANGELOG</div>
                {Changelog.map((change: any) => {
                    return (
                        <div className="flex flex-col mt-10">
                            <div className="flex color-text-secundary font-semibold">
                                {change["date"]} - {change["version"]}
                            </div>
                            <div className="flex flex-col color-text-secundary">
                                {change["textChanges"]?.map((text: string) => {
                                    return <li>{text}</li>;
                                })}
                            </div>
                        </div>
                    );
                })}
            </CardInfoComponent>
        </LayoutComponent>
    );
};

export default ChangelogPage;
