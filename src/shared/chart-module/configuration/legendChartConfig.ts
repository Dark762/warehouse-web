export class LegendChartConfig{
    public fontSize: number = 30;
    public verticalAlign: string = LegendAlignmentVerticalChartConfig.top;
    public horizontalAlign: string = LegendAlignmentHorizontalChartConfig.center;
}

export enum LegendAlignmentHorizontalChartConfig {
    left = "left",
    center = "center",
    right = "right"
}


export enum LegendAlignmentVerticalChartConfig {
    top = "top",
    center = "center",
    bottom = "bottom"
}