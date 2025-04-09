// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_PARCELLATE_CONNECTIVITY_METADATA: Metadata = {
    id: "6e249aa368d9ee8a5a4ff1ad332d424e79a14920.boutiques",
    name: "mris_parcellate_connectivity",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisParcellateConnectivityParameters {
    "__STYXTYPE__": "mris_parcellate_connectivity";
    "smooth_iterations"?: number | null | undefined;
    "input_surface": InputPathType;
    "input_correlations": InputPathType;
    "output_parcellation": string;
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
        "mris_parcellate_connectivity": mris_parcellate_connectivity_cargs,
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
        "mris_parcellate_connectivity": mris_parcellate_connectivity_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_parcellate_connectivity(...)`.
 *
 * @interface
 */
interface MrisParcellateConnectivityOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting output parcellation.
     */
    parcellation_output: OutputPathType;
}


function mris_parcellate_connectivity_params(
    input_surface: InputPathType,
    input_correlations: InputPathType,
    output_parcellation: string,
    smooth_iterations: number | null = null,
): MrisParcellateConnectivityParameters {
    /**
     * Build parameters.
    
     * @param input_surface Input surface file.
     * @param input_correlations Input correlations file.
     * @param output_parcellation Output parcellation file.
     * @param smooth_iterations Number of averaging iterations for smoothing correlation matrix.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_parcellate_connectivity" as const,
        "input_surface": input_surface,
        "input_correlations": input_correlations,
        "output_parcellation": output_parcellation,
    };
    if (smooth_iterations !== null) {
        params["smooth_iterations"] = smooth_iterations;
    }
    return params;
}


function mris_parcellate_connectivity_cargs(
    params: MrisParcellateConnectivityParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_parcellate_connectivity");
    if ((params["smooth_iterations"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["smooth_iterations"] ?? null))
        );
    }
    cargs.push(execution.inputFile((params["input_surface"] ?? null)));
    cargs.push(execution.inputFile((params["input_correlations"] ?? null)));
    cargs.push((params["output_parcellation"] ?? null));
    return cargs;
}


function mris_parcellate_connectivity_outputs(
    params: MrisParcellateConnectivityParameters,
    execution: Execution,
): MrisParcellateConnectivityOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisParcellateConnectivityOutputs = {
        root: execution.outputFile("."),
        parcellation_output: execution.outputFile([(params["output_parcellation"] ?? null)].join('')),
    };
    return ret;
}


function mris_parcellate_connectivity_execute(
    params: MrisParcellateConnectivityParameters,
    execution: Execution,
): MrisParcellateConnectivityOutputs {
    /**
     * A tool to parcellate brain connectivity using surface and correlation data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisParcellateConnectivityOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_parcellate_connectivity_cargs(params, execution)
    const ret = mris_parcellate_connectivity_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_parcellate_connectivity(
    input_surface: InputPathType,
    input_correlations: InputPathType,
    output_parcellation: string,
    smooth_iterations: number | null = null,
    runner: Runner | null = null,
): MrisParcellateConnectivityOutputs {
    /**
     * A tool to parcellate brain connectivity using surface and correlation data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_surface Input surface file.
     * @param input_correlations Input correlations file.
     * @param output_parcellation Output parcellation file.
     * @param smooth_iterations Number of averaging iterations for smoothing correlation matrix.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisParcellateConnectivityOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_PARCELLATE_CONNECTIVITY_METADATA);
    const params = mris_parcellate_connectivity_params(input_surface, input_correlations, output_parcellation, smooth_iterations)
    return mris_parcellate_connectivity_execute(params, execution);
}


export {
      MRIS_PARCELLATE_CONNECTIVITY_METADATA,
      MrisParcellateConnectivityOutputs,
      MrisParcellateConnectivityParameters,
      mris_parcellate_connectivity,
      mris_parcellate_connectivity_params,
};
