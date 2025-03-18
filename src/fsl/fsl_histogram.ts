// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_HISTOGRAM_METADATA: Metadata = {
    id: "56e6e07d87bebcc158987d604f26d240ea5898e1.boutiques",
    name: "fsl_histogram",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslHistogramParameters {
    "__STYXTYPE__": "fsl_histogram";
    "input_file": InputPathType;
    "input_file_duplicate": InputPathType;
    "output_file": string;
    "output_file_duplicate": string;
    "mask_file"?: InputPathType | null | undefined;
    "mask_file_duplicate"?: InputPathType | null | undefined;
    "gmmfit_file"?: InputPathType | null | undefined;
    "gmmfit_file_duplicate"?: InputPathType | null | undefined;
    "plot_title"?: string | null | undefined;
    "plot_title_duplicate"?: string | null | undefined;
    "legend_file"?: InputPathType | null | undefined;
    "legend_file_duplicate"?: InputPathType | null | undefined;
    "xlabel"?: string | null | undefined;
    "xlabel_duplicate"?: string | null | undefined;
    "ylabel"?: string | null | undefined;
    "ylabel_duplicate"?: string | null | undefined;
    "plot_height"?: number | null | undefined;
    "plot_height_duplicate"?: number | null | undefined;
    "plot_width"?: number | null | undefined;
    "plot_width_duplicate"?: number | null | undefined;
    "num_bins"?: number | null | undefined;
    "num_bins_duplicate"?: number | null | undefined;
    "zoom_factor"?: number | null | undefined;
    "zoom_factor_duplicate"?: number | null | undefined;
    "use_gmm_flag": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "fsl_histogram": fsl_histogram_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "fsl_histogram": fsl_histogram_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_histogram(...)`.
 *
 * @interface
 */
interface FslHistogramOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated PNG file
     */
    png_file: OutputPathType;
}


function fsl_histogram_params(
    input_file: InputPathType,
    input_file_duplicate: InputPathType,
    output_file: string,
    output_file_duplicate: string,
    mask_file: InputPathType | null = null,
    mask_file_duplicate: InputPathType | null = null,
    gmmfit_file: InputPathType | null = null,
    gmmfit_file_duplicate: InputPathType | null = null,
    plot_title: string | null = null,
    plot_title_duplicate: string | null = null,
    legend_file: InputPathType | null = null,
    legend_file_duplicate: InputPathType | null = null,
    xlabel: string | null = null,
    xlabel_duplicate: string | null = null,
    ylabel: string | null = null,
    ylabel_duplicate: string | null = null,
    plot_height: number | null = null,
    plot_height_duplicate: number | null = null,
    plot_width: number | null = null,
    plot_width_duplicate: number | null = null,
    num_bins: number | null = null,
    num_bins_duplicate: number | null = null,
    zoom_factor: number | null = null,
    zoom_factor_duplicate: number | null = null,
    use_gmm_flag: boolean = false,
): FslHistogramParameters {
    /**
     * Build parameters.
    
     * @param input_file Input file name
     * @param input_file_duplicate Input file name
     * @param output_file Output filename for the PNG file
     * @param output_file_duplicate Output filename for the PNG file
     * @param mask_file Mask file name
     * @param mask_file_duplicate Mask file name
     * @param gmmfit_file File name of matrix with parameter estimates of Gaussian/Gamma mixture model (means, variances and proportions per row)
     * @param gmmfit_file_duplicate File name of matrix with parameter estimates of Gaussian/Gamma mixture model (means, variances and proportions per row)
     * @param plot_title Plot title
     * @param plot_title_duplicate Plot title
     * @param legend_file File name of ASCII text file, one row per legend entry
     * @param legend_file_duplicate File name of ASCII text file, one row per legend entry
     * @param xlabel X-axis label
     * @param xlabel_duplicate X-axis label
     * @param ylabel Y-axis label
     * @param ylabel_duplicate Y-axis label
     * @param plot_height Plot height in pixels (default 400)
     * @param plot_height_duplicate Plot height in pixels (default 400)
     * @param plot_width Plot width in pixels (default 600)
     * @param plot_width_duplicate Plot width in pixels (default 600)
     * @param num_bins Number of histogram bins
     * @param num_bins_duplicate Number of histogram bins
     * @param zoom_factor Zoom factor for y-range (e.g. 2.0)
     * @param zoom_factor_duplicate Zoom factor for y-range (e.g. 2.0)
     * @param use_gmm_flag Use Gaussian mixture model instead of Gaussian/Gamma mixture model
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_histogram" as const,
        "input_file": input_file,
        "input_file_duplicate": input_file_duplicate,
        "output_file": output_file,
        "output_file_duplicate": output_file_duplicate,
        "use_gmm_flag": use_gmm_flag,
    };
    if (mask_file !== null) {
        params["mask_file"] = mask_file;
    }
    if (mask_file_duplicate !== null) {
        params["mask_file_duplicate"] = mask_file_duplicate;
    }
    if (gmmfit_file !== null) {
        params["gmmfit_file"] = gmmfit_file;
    }
    if (gmmfit_file_duplicate !== null) {
        params["gmmfit_file_duplicate"] = gmmfit_file_duplicate;
    }
    if (plot_title !== null) {
        params["plot_title"] = plot_title;
    }
    if (plot_title_duplicate !== null) {
        params["plot_title_duplicate"] = plot_title_duplicate;
    }
    if (legend_file !== null) {
        params["legend_file"] = legend_file;
    }
    if (legend_file_duplicate !== null) {
        params["legend_file_duplicate"] = legend_file_duplicate;
    }
    if (xlabel !== null) {
        params["xlabel"] = xlabel;
    }
    if (xlabel_duplicate !== null) {
        params["xlabel_duplicate"] = xlabel_duplicate;
    }
    if (ylabel !== null) {
        params["ylabel"] = ylabel;
    }
    if (ylabel_duplicate !== null) {
        params["ylabel_duplicate"] = ylabel_duplicate;
    }
    if (plot_height !== null) {
        params["plot_height"] = plot_height;
    }
    if (plot_height_duplicate !== null) {
        params["plot_height_duplicate"] = plot_height_duplicate;
    }
    if (plot_width !== null) {
        params["plot_width"] = plot_width;
    }
    if (plot_width_duplicate !== null) {
        params["plot_width_duplicate"] = plot_width_duplicate;
    }
    if (num_bins !== null) {
        params["num_bins"] = num_bins;
    }
    if (num_bins_duplicate !== null) {
        params["num_bins_duplicate"] = num_bins_duplicate;
    }
    if (zoom_factor !== null) {
        params["zoom_factor"] = zoom_factor;
    }
    if (zoom_factor_duplicate !== null) {
        params["zoom_factor_duplicate"] = zoom_factor_duplicate;
    }
    return params;
}


function fsl_histogram_cargs(
    params: FslHistogramParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_histogram");
    cargs.push(
        "-i",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "--in",
        execution.inputFile((params["input_file_duplicate"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_file"] ?? null)
    );
    cargs.push(
        "--out",
        (params["output_file_duplicate"] ?? null)
    );
    if ((params["mask_file"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask_file"] ?? null))
        );
    }
    if ((params["mask_file_duplicate"] ?? null) !== null) {
        cargs.push(
            "--mask",
            execution.inputFile((params["mask_file_duplicate"] ?? null))
        );
    }
    if ((params["gmmfit_file"] ?? null) !== null) {
        cargs.push(
            "-f",
            execution.inputFile((params["gmmfit_file"] ?? null))
        );
    }
    if ((params["gmmfit_file_duplicate"] ?? null) !== null) {
        cargs.push(
            "--gmmfit",
            execution.inputFile((params["gmmfit_file_duplicate"] ?? null))
        );
    }
    if ((params["plot_title"] ?? null) !== null) {
        cargs.push(
            "-t",
            (params["plot_title"] ?? null)
        );
    }
    if ((params["plot_title_duplicate"] ?? null) !== null) {
        cargs.push(
            "--title",
            (params["plot_title_duplicate"] ?? null)
        );
    }
    if ((params["legend_file"] ?? null) !== null) {
        cargs.push(
            "-l",
            execution.inputFile((params["legend_file"] ?? null))
        );
    }
    if ((params["legend_file_duplicate"] ?? null) !== null) {
        cargs.push(
            "--legend",
            execution.inputFile((params["legend_file_duplicate"] ?? null))
        );
    }
    if ((params["xlabel"] ?? null) !== null) {
        cargs.push(
            "-x",
            (params["xlabel"] ?? null)
        );
    }
    if ((params["xlabel_duplicate"] ?? null) !== null) {
        cargs.push(
            "--xlabel",
            (params["xlabel_duplicate"] ?? null)
        );
    }
    if ((params["ylabel"] ?? null) !== null) {
        cargs.push(
            "-y",
            (params["ylabel"] ?? null)
        );
    }
    if ((params["ylabel_duplicate"] ?? null) !== null) {
        cargs.push(
            "--ylabel",
            (params["ylabel_duplicate"] ?? null)
        );
    }
    if ((params["plot_height"] ?? null) !== null) {
        cargs.push(
            "-h",
            String((params["plot_height"] ?? null))
        );
    }
    if ((params["plot_height_duplicate"] ?? null) !== null) {
        cargs.push(
            "--height",
            String((params["plot_height_duplicate"] ?? null))
        );
    }
    if ((params["plot_width"] ?? null) !== null) {
        cargs.push(
            "-w",
            String((params["plot_width"] ?? null))
        );
    }
    if ((params["plot_width_duplicate"] ?? null) !== null) {
        cargs.push(
            "--width",
            String((params["plot_width_duplicate"] ?? null))
        );
    }
    if ((params["num_bins"] ?? null) !== null) {
        cargs.push(
            "-b",
            String((params["num_bins"] ?? null))
        );
    }
    if ((params["num_bins_duplicate"] ?? null) !== null) {
        cargs.push(
            "--bins",
            String((params["num_bins_duplicate"] ?? null))
        );
    }
    if ((params["zoom_factor"] ?? null) !== null) {
        cargs.push(
            "-d",
            String((params["zoom_factor"] ?? null))
        );
    }
    if ((params["zoom_factor_duplicate"] ?? null) !== null) {
        cargs.push(
            "--detail",
            String((params["zoom_factor_duplicate"] ?? null))
        );
    }
    if ((params["use_gmm_flag"] ?? null)) {
        cargs.push("--gmm");
    }
    return cargs;
}


function fsl_histogram_outputs(
    params: FslHistogramParameters,
    execution: Execution,
): FslHistogramOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslHistogramOutputs = {
        root: execution.outputFile("."),
        png_file: execution.outputFile([(params["output_file_duplicate"] ?? null)].join('')),
    };
    return ret;
}


function fsl_histogram_execute(
    params: FslHistogramParameters,
    execution: Execution,
): FslHistogramOutputs {
    /**
     * Histogram plotting tool for FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslHistogramOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_histogram_cargs(params, execution)
    const ret = fsl_histogram_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_histogram(
    input_file: InputPathType,
    input_file_duplicate: InputPathType,
    output_file: string,
    output_file_duplicate: string,
    mask_file: InputPathType | null = null,
    mask_file_duplicate: InputPathType | null = null,
    gmmfit_file: InputPathType | null = null,
    gmmfit_file_duplicate: InputPathType | null = null,
    plot_title: string | null = null,
    plot_title_duplicate: string | null = null,
    legend_file: InputPathType | null = null,
    legend_file_duplicate: InputPathType | null = null,
    xlabel: string | null = null,
    xlabel_duplicate: string | null = null,
    ylabel: string | null = null,
    ylabel_duplicate: string | null = null,
    plot_height: number | null = null,
    plot_height_duplicate: number | null = null,
    plot_width: number | null = null,
    plot_width_duplicate: number | null = null,
    num_bins: number | null = null,
    num_bins_duplicate: number | null = null,
    zoom_factor: number | null = null,
    zoom_factor_duplicate: number | null = null,
    use_gmm_flag: boolean = false,
    runner: Runner | null = null,
): FslHistogramOutputs {
    /**
     * Histogram plotting tool for FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_file Input file name
     * @param input_file_duplicate Input file name
     * @param output_file Output filename for the PNG file
     * @param output_file_duplicate Output filename for the PNG file
     * @param mask_file Mask file name
     * @param mask_file_duplicate Mask file name
     * @param gmmfit_file File name of matrix with parameter estimates of Gaussian/Gamma mixture model (means, variances and proportions per row)
     * @param gmmfit_file_duplicate File name of matrix with parameter estimates of Gaussian/Gamma mixture model (means, variances and proportions per row)
     * @param plot_title Plot title
     * @param plot_title_duplicate Plot title
     * @param legend_file File name of ASCII text file, one row per legend entry
     * @param legend_file_duplicate File name of ASCII text file, one row per legend entry
     * @param xlabel X-axis label
     * @param xlabel_duplicate X-axis label
     * @param ylabel Y-axis label
     * @param ylabel_duplicate Y-axis label
     * @param plot_height Plot height in pixels (default 400)
     * @param plot_height_duplicate Plot height in pixels (default 400)
     * @param plot_width Plot width in pixels (default 600)
     * @param plot_width_duplicate Plot width in pixels (default 600)
     * @param num_bins Number of histogram bins
     * @param num_bins_duplicate Number of histogram bins
     * @param zoom_factor Zoom factor for y-range (e.g. 2.0)
     * @param zoom_factor_duplicate Zoom factor for y-range (e.g. 2.0)
     * @param use_gmm_flag Use Gaussian mixture model instead of Gaussian/Gamma mixture model
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslHistogramOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_HISTOGRAM_METADATA);
    const params = fsl_histogram_params(input_file, input_file_duplicate, output_file, output_file_duplicate, mask_file, mask_file_duplicate, gmmfit_file, gmmfit_file_duplicate, plot_title, plot_title_duplicate, legend_file, legend_file_duplicate, xlabel, xlabel_duplicate, ylabel, ylabel_duplicate, plot_height, plot_height_duplicate, plot_width, plot_width_duplicate, num_bins, num_bins_duplicate, zoom_factor, zoom_factor_duplicate, use_gmm_flag)
    return fsl_histogram_execute(params, execution);
}


export {
      FSL_HISTOGRAM_METADATA,
      FslHistogramOutputs,
      FslHistogramParameters,
      fsl_histogram,
      fsl_histogram_params,
};
