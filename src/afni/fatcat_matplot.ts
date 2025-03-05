// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FATCAT_MATPLOT_METADATA: Metadata = {
    id: "f644c652339bbfb3aa84d71606689abe580b8c2b.boutiques",
    name: "FATCAT_matplot",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface FatcatMatplotParameters {
    "__STYXTYPE__": "FATCAT_matplot";
    "directory": string;
    "shiny_folder": boolean;
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
        "FATCAT_matplot": fatcat_matplot_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fatcat_matplot(...)`.
 *
 * @interface
 */
interface FatcatMatplotOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fatcat_matplot_params(
    directory: string,
    shiny_folder: boolean = false,
): FatcatMatplotParameters {
    /**
     * Build parameters.
    
     * @param directory Path to a folder containing .netcc and/or .grid files.
     * @param shiny_folder Use a custom shiny folder (for testing purposes).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "FATCAT_matplot" as const,
        "directory": directory,
        "shiny_folder": shiny_folder,
    };
    return params;
}


function fatcat_matplot_cargs(
    params: FatcatMatplotParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("FATCAT_matplot");
    cargs.push((params["directory"] ?? null));
    if ((params["shiny_folder"] ?? null)) {
        cargs.push("-ShinyFolder");
    }
    return cargs;
}


function fatcat_matplot_outputs(
    params: FatcatMatplotParameters,
    execution: Execution,
): FatcatMatplotOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FatcatMatplotOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fatcat_matplot_execute(
    params: FatcatMatplotParameters,
    execution: Execution,
): FatcatMatplotOutputs {
    /**
     * Launch a shiny app to visualize .netcc and/or .grid files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FatcatMatplotOutputs`).
     */
    params = execution.params(params)
    const cargs = fatcat_matplot_cargs(params, execution)
    const ret = fatcat_matplot_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fatcat_matplot(
    directory: string,
    shiny_folder: boolean = false,
    runner: Runner | null = null,
): FatcatMatplotOutputs {
    /**
     * Launch a shiny app to visualize .netcc and/or .grid files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param directory Path to a folder containing .netcc and/or .grid files.
     * @param shiny_folder Use a custom shiny folder (for testing purposes).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FatcatMatplotOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FATCAT_MATPLOT_METADATA);
    const params = fatcat_matplot_params(directory, shiny_folder)
    return fatcat_matplot_execute(params, execution);
}


export {
      FATCAT_MATPLOT_METADATA,
      FatcatMatplotOutputs,
      FatcatMatplotParameters,
      fatcat_matplot,
      fatcat_matplot_params,
};
