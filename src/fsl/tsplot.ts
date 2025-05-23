// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TSPLOT_METADATA: Metadata = {
    id: "2190e399a484f23d506d99f37ec724a0e180b64f.boutiques",
    name: "tsplot",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface TsplotParameters {
    "__STYXTYPE__": "tsplot";
    "input_directory": string;
    "main_filtered_data"?: InputPathType | null | undefined;
    "coordinates"?: Array<number> | null | undefined;
    "coordinates_output"?: Array<number> | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "output_directory"?: string | null | undefined;
    "no_weight_flag": boolean;
    "prewhiten_flag": boolean;
    "no_raw_flag": boolean;
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
        "tsplot": tsplot_cargs,
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
        "tsplot": tsplot_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `tsplot(...)`.
 *
 * @interface
 */
interface TsplotOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output timeseries data
     */
    timeseries_output: OutputPathType | null;
}


function tsplot_params(
    input_directory: string,
    main_filtered_data: InputPathType | null = null,
    coordinates: Array<number> | null = null,
    coordinates_output: Array<number> | null = null,
    mask: InputPathType | null = null,
    output_directory: string | null = null,
    no_weight_flag: boolean = false,
    prewhiten_flag: boolean = false,
    no_raw_flag: boolean = false,
): TsplotParameters {
    /**
     * Build parameters.
    
     * @param input_directory Input FEAT directory (e.g. feat_directory.feat)
     * @param main_filtered_data Input main filtered data, in case it's not <feat_directory.feat>/filtered_func_data
     * @param coordinates Use X, Y, Z instead of max Z stat position
     * @param coordinates_output Use X,Y,Z to output time series only - no stats or modelling
     * @param mask Use mask image instead of thresholded activation images
     * @param output_directory Change output directory from default of input FEAT directory
     * @param no_weight_flag Don't weight cluster averaging with Z stats
     * @param prewhiten_flag Prewhiten data and model timeseries before plotting
     * @param no_raw_flag Don't keep raw data text files
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tsplot" as const,
        "input_directory": input_directory,
        "no_weight_flag": no_weight_flag,
        "prewhiten_flag": prewhiten_flag,
        "no_raw_flag": no_raw_flag,
    };
    if (main_filtered_data !== null) {
        params["main_filtered_data"] = main_filtered_data;
    }
    if (coordinates !== null) {
        params["coordinates"] = coordinates;
    }
    if (coordinates_output !== null) {
        params["coordinates_output"] = coordinates_output;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (output_directory !== null) {
        params["output_directory"] = output_directory;
    }
    return params;
}


function tsplot_cargs(
    params: TsplotParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tsplot");
    cargs.push((params["input_directory"] ?? null));
    if ((params["main_filtered_data"] ?? null) !== null) {
        cargs.push(
            "-f",
            execution.inputFile((params["main_filtered_data"] ?? null))
        );
    }
    if ((params["coordinates"] ?? null) !== null) {
        cargs.push(
            "-c",
            ...(params["coordinates"] ?? null).map(String)
        );
    }
    if ((params["coordinates_output"] ?? null) !== null) {
        cargs.push(
            "-C",
            ...(params["coordinates_output"] ?? null).map(String)
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["output_directory"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_directory"] ?? null)
        );
    }
    if ((params["no_weight_flag"] ?? null)) {
        cargs.push("-n");
    }
    if ((params["prewhiten_flag"] ?? null)) {
        cargs.push("-p");
    }
    if ((params["no_raw_flag"] ?? null)) {
        cargs.push("-d");
    }
    return cargs;
}


function tsplot_outputs(
    params: TsplotParameters,
    execution: Execution,
): TsplotOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TsplotOutputs = {
        root: execution.outputFile("."),
        timeseries_output: ((params["output_directory"] ?? null) !== null) ? execution.outputFile([(params["output_directory"] ?? null), "/timeseries.txt"].join('')) : null,
    };
    return ret;
}


function tsplot_execute(
    params: TsplotParameters,
    execution: Execution,
): TsplotOutputs {
    /**
     * Time series plotting tool for FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TsplotOutputs`).
     */
    params = execution.params(params)
    const cargs = tsplot_cargs(params, execution)
    const ret = tsplot_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tsplot(
    input_directory: string,
    main_filtered_data: InputPathType | null = null,
    coordinates: Array<number> | null = null,
    coordinates_output: Array<number> | null = null,
    mask: InputPathType | null = null,
    output_directory: string | null = null,
    no_weight_flag: boolean = false,
    prewhiten_flag: boolean = false,
    no_raw_flag: boolean = false,
    runner: Runner | null = null,
): TsplotOutputs {
    /**
     * Time series plotting tool for FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_directory Input FEAT directory (e.g. feat_directory.feat)
     * @param main_filtered_data Input main filtered data, in case it's not <feat_directory.feat>/filtered_func_data
     * @param coordinates Use X, Y, Z instead of max Z stat position
     * @param coordinates_output Use X,Y,Z to output time series only - no stats or modelling
     * @param mask Use mask image instead of thresholded activation images
     * @param output_directory Change output directory from default of input FEAT directory
     * @param no_weight_flag Don't weight cluster averaging with Z stats
     * @param prewhiten_flag Prewhiten data and model timeseries before plotting
     * @param no_raw_flag Don't keep raw data text files
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TsplotOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TSPLOT_METADATA);
    const params = tsplot_params(input_directory, main_filtered_data, coordinates, coordinates_output, mask, output_directory, no_weight_flag, prewhiten_flag, no_raw_flag)
    return tsplot_execute(params, execution);
}


export {
      TSPLOT_METADATA,
      TsplotOutputs,
      TsplotParameters,
      tsplot,
      tsplot_params,
};
