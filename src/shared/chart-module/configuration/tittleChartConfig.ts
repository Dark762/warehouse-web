export class TittleChartConfig {
    public text: string = "Styling the Title";
    public fontColor: string = "#2f4f4f";
    public fontSize: number = 30;
    public padding: number = 10;
    public margin: number = 15;
    public backgroundColor: string = "#FFFFE0";
    public borderThickness: number = 1;
    public cornerRadius: number = 5;
    public fontWeight: string = "bold";
    public verticalAlign: string = TitleAlignmentVerticalChartConfig.top;
    public horizontalAlign: string = TitleAlignmentHorizontalChartConfig.center;

}


export enum TitleAlignmentHorizontalChartConfig {
    left = "left",
    center = "center",
    right = "right"
}


export enum TitleAlignmentVerticalChartConfig {
    top = "top",
    center = "center",
    bottom = "bottom"
}