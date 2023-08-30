import { LegendChartConfig } from "./legendChartConfig";
import { subtitleChartConfig } from "./subtitleChartConfig";
import { TittleChartConfig } from "./tittleChartConfig";

export class ConfigChart {
    public tittle: TittleChartConfig = new TittleChartConfig();
    public subtitle: subtitleChartConfig = new subtitleChartConfig();
    public legend: LegendChartConfig = new LegendChartConfig();
    public animationEnabled: boolean = true;
}