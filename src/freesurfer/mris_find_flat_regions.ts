// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_FIND_FLAT_REGIONS_METADATA: Metadata = {
    id: "44372d93aad1a76a59c052c0d483b056d5c709e5.boutiques",
    name: "mris_find_flat_regions",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisFindFlatRegionsParameters {
    "__STYXTYPE__": "mris_find_flat_regions";
    "surface": InputPathType;
    "wfile": string;
    "threshold"?: number | null | undefined;
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
        "mris_find_flat_regions": mris_find_flat_regions_cargs,
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
        "mris_find_flat_regions": mris_find_flat_regions_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_find_flat_regions(...)`.
 *
 * @interface
 */
interface MrisFindFlatRegionsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output label file with regions where the surface is almost perpendicular to one of the cardinal axes
     */
    output_label_file: OutputPathType;
}


function mris_find_flat_regions_params(
    surface: InputPathType,
    wfile: string,
    threshold: number | null = 0.99,
): MrisFindFlatRegionsParameters {
    /**
     * Build parameters.
    
     * @param surface Surface input file
     * @param wfile Output label file
     * @param threshold Threshold to use (default=0.990)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_find_flat_regions" as const,
        "surface": surface,
        "wfile": wfile,
    };
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    return params;
}


function mris_find_flat_regions_cargs(
    params: MrisFindFlatRegionsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_find_flat_regions");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push((params["wfile"] ?? null));
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "-t",
            String((params["threshold"] ?? null))
        );
    }
    return cargs;
}


function mris_find_flat_regions_outputs(
    params: MrisFindFlatRegionsParameters,
    execution: Execution,
): MrisFindFlatRegionsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisFindFlatRegionsOutputs = {
        root: execution.outputFile("."),
        output_label_file: execution.outputFile([(params["wfile"] ?? null)].join('')),
    };
    return ret;
}


function mris_find_flat_regions_execute(
    params: MrisFindFlatRegionsParameters,
    execution: Execution,
): MrisFindFlatRegionsOutputs {
    /**
     * Compute regions in which the surface is almost perpendicular to one of the cardinal axes and write the results to a label file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisFindFlatRegionsOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_find_flat_regions_cargs(params, execution)
    const ret = mris_find_flat_regions_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_find_flat_regions(
    surface: InputPathType,
    wfile: string,
    threshold: number | null = 0.99,
    runner: Runner | null = null,
): MrisFindFlatRegionsOutputs {
    /**
     * Compute regions in which the surface is almost perpendicular to one of the cardinal axes and write the results to a label file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param surface Surface input file
     * @param wfile Output label file
     * @param threshold Threshold to use (default=0.990)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisFindFlatRegionsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_FIND_FLAT_REGIONS_METADATA);
    const params = mris_find_flat_regions_params(surface, wfile, threshold)
    return mris_find_flat_regions_execute(params, execution);
}


export {
      MRIS_FIND_FLAT_REGIONS_METADATA,
      MrisFindFlatRegionsOutputs,
      MrisFindFlatRegionsParameters,
      mris_find_flat_regions,
      mris_find_flat_regions_params,
};
