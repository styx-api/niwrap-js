// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const EDDY_COMBINE_METADATA: Metadata = {
    id: "986d7981faa09f892fa1fdefbe0561363b5309f4.boutiques",
    name: "eddy_combine",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface EddyCombineParameters {
    "__STYXTYPE__": "eddy_combine";
    "pos_data": InputPathType;
    "pos_bvals": InputPathType;
    "pos_bvecs": InputPathType;
    "pos_series_vol": number;
    "neg_data": InputPathType;
    "neg_bvals": InputPathType;
    "neg_bvecs": InputPathType;
    "neg_series_vol": number;
    "output_path": string;
    "only_matched_flag": number;
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
        "eddy_combine": eddy_combine_cargs,
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
        "eddy_combine": eddy_combine_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `eddy_combine(...)`.
 *
 * @interface
 */
interface EddyCombineOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Combined positive and negative phase-encoded data
     */
    combined_data: OutputPathType;
    /**
     * Combined b-values file
     */
    combined_bvals: OutputPathType;
    /**
     * Combined b-vectors file
     */
    combined_bvecs: OutputPathType;
}


function eddy_combine_params(
    pos_data: InputPathType,
    pos_bvals: InputPathType,
    pos_bvecs: InputPathType,
    pos_series_vol: number,
    neg_data: InputPathType,
    neg_bvals: InputPathType,
    neg_bvecs: InputPathType,
    neg_series_vol: number,
    output_path: string,
    only_matched_flag: number,
): EddyCombineParameters {
    /**
     * Build parameters.
    
     * @param pos_data Path to the positive phase-encoded data file (e.g. PosData.nii.gz)
     * @param pos_bvals Path to the positive phase-encoded b-values file (e.g. Posbvals)
     * @param pos_bvecs Path to the positive phase-encoded b-vectors file (e.g. Posbvecs)
     * @param pos_series_vol Positive series volume count
     * @param neg_data Path to the negative phase-encoded data file (e.g. NegData.nii.gz)
     * @param neg_bvals Path to the negative phase-encoded b-values file (e.g. Negbvals)
     * @param neg_bvecs Path to the negative phase-encoded b-vectors file (e.g. Negbvecs)
     * @param neg_series_vol Negative series volume count
     * @param output_path Output directory path
     * @param only_matched_flag Flag to include only matched volumes (set to 1 to include only matched volumes, otherwise 0)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "eddy_combine" as const,
        "pos_data": pos_data,
        "pos_bvals": pos_bvals,
        "pos_bvecs": pos_bvecs,
        "pos_series_vol": pos_series_vol,
        "neg_data": neg_data,
        "neg_bvals": neg_bvals,
        "neg_bvecs": neg_bvecs,
        "neg_series_vol": neg_series_vol,
        "output_path": output_path,
        "only_matched_flag": only_matched_flag,
    };
    return params;
}


function eddy_combine_cargs(
    params: EddyCombineParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("eddy_combine");
    cargs.push(execution.inputFile((params["pos_data"] ?? null)));
    cargs.push(execution.inputFile((params["pos_bvals"] ?? null)));
    cargs.push(execution.inputFile((params["pos_bvecs"] ?? null)));
    cargs.push(String((params["pos_series_vol"] ?? null)));
    cargs.push(execution.inputFile((params["neg_data"] ?? null)));
    cargs.push(execution.inputFile((params["neg_bvals"] ?? null)));
    cargs.push(execution.inputFile((params["neg_bvecs"] ?? null)));
    cargs.push(String((params["neg_series_vol"] ?? null)));
    cargs.push((params["output_path"] ?? null));
    cargs.push(String((params["only_matched_flag"] ?? null)));
    return cargs;
}


function eddy_combine_outputs(
    params: EddyCombineParameters,
    execution: Execution,
): EddyCombineOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: EddyCombineOutputs = {
        root: execution.outputFile("."),
        combined_data: execution.outputFile([(params["output_path"] ?? null), "/combined_data.nii.gz"].join('')),
        combined_bvals: execution.outputFile([(params["output_path"] ?? null), "/combined_bvals"].join('')),
        combined_bvecs: execution.outputFile([(params["output_path"] ?? null), "/combined_bvecs"].join('')),
    };
    return ret;
}


function eddy_combine_execute(
    params: EddyCombineParameters,
    execution: Execution,
): EddyCombineOutputs {
    /**
     * Combines diffusion data sets with opposite phase encoding directions for use with FSL's EDDY.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `EddyCombineOutputs`).
     */
    params = execution.params(params)
    const cargs = eddy_combine_cargs(params, execution)
    const ret = eddy_combine_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function eddy_combine(
    pos_data: InputPathType,
    pos_bvals: InputPathType,
    pos_bvecs: InputPathType,
    pos_series_vol: number,
    neg_data: InputPathType,
    neg_bvals: InputPathType,
    neg_bvecs: InputPathType,
    neg_series_vol: number,
    output_path: string,
    only_matched_flag: number,
    runner: Runner | null = null,
): EddyCombineOutputs {
    /**
     * Combines diffusion data sets with opposite phase encoding directions for use with FSL's EDDY.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param pos_data Path to the positive phase-encoded data file (e.g. PosData.nii.gz)
     * @param pos_bvals Path to the positive phase-encoded b-values file (e.g. Posbvals)
     * @param pos_bvecs Path to the positive phase-encoded b-vectors file (e.g. Posbvecs)
     * @param pos_series_vol Positive series volume count
     * @param neg_data Path to the negative phase-encoded data file (e.g. NegData.nii.gz)
     * @param neg_bvals Path to the negative phase-encoded b-values file (e.g. Negbvals)
     * @param neg_bvecs Path to the negative phase-encoded b-vectors file (e.g. Negbvecs)
     * @param neg_series_vol Negative series volume count
     * @param output_path Output directory path
     * @param only_matched_flag Flag to include only matched volumes (set to 1 to include only matched volumes, otherwise 0)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `EddyCombineOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(EDDY_COMBINE_METADATA);
    const params = eddy_combine_params(pos_data, pos_bvals, pos_bvecs, pos_series_vol, neg_data, neg_bvals, neg_bvecs, neg_series_vol, output_path, only_matched_flag)
    return eddy_combine_execute(params, execution);
}


export {
      EDDY_COMBINE_METADATA,
      EddyCombineOutputs,
      EddyCombineParameters,
      eddy_combine,
      eddy_combine_params,
};
