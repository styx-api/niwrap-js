// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const HISTO_SYNTHESIZE_METADATA: Metadata = {
    id: "ebfa527b23cadea769992b1ad756ebe6c1f58512.boutiques",
    name: "histo_synthesize",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface HistoSynthesizeParameters {
    "__STYXTYPE__": "histo_synthesize";
    "mri_volume": InputPathType;
    "histo_volume": InputPathType;
    "synthetic_histo": string;
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
        "histo_synthesize": histo_synthesize_cargs,
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
        "histo_synthesize": histo_synthesize_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `histo_synthesize(...)`.
 *
 * @interface
 */
interface HistoSynthesizeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file of the synthetic histo volume.
     */
    output_synthetic_histo: OutputPathType;
}


function histo_synthesize_params(
    mri_volume: InputPathType,
    histo_volume: InputPathType,
    synthetic_histo: string,
): HistoSynthesizeParameters {
    /**
     * Build parameters.
    
     * @param mri_volume Input MRI volume file.
     * @param histo_volume Input HISTO volume file.
     * @param synthetic_histo Output synthetic histo volume file.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "histo_synthesize" as const,
        "mri_volume": mri_volume,
        "histo_volume": histo_volume,
        "synthetic_histo": synthetic_histo,
    };
    return params;
}


function histo_synthesize_cargs(
    params: HistoSynthesizeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("histo_synthesize");
    cargs.push("[OPTIONS]");
    cargs.push(execution.inputFile((params["mri_volume"] ?? null)));
    cargs.push(execution.inputFile((params["histo_volume"] ?? null)));
    cargs.push((params["synthetic_histo"] ?? null));
    return cargs;
}


function histo_synthesize_outputs(
    params: HistoSynthesizeParameters,
    execution: Execution,
): HistoSynthesizeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: HistoSynthesizeOutputs = {
        root: execution.outputFile("."),
        output_synthetic_histo: execution.outputFile([(params["synthetic_histo"] ?? null)].join('')),
    };
    return ret;
}


function histo_synthesize_execute(
    params: HistoSynthesizeParameters,
    execution: Execution,
): HistoSynthesizeOutputs {
    /**
     * Tool for synthesizing histology-like volumes from MRI data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `HistoSynthesizeOutputs`).
     */
    params = execution.params(params)
    const cargs = histo_synthesize_cargs(params, execution)
    const ret = histo_synthesize_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function histo_synthesize(
    mri_volume: InputPathType,
    histo_volume: InputPathType,
    synthetic_histo: string,
    runner: Runner | null = null,
): HistoSynthesizeOutputs {
    /**
     * Tool for synthesizing histology-like volumes from MRI data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param mri_volume Input MRI volume file.
     * @param histo_volume Input HISTO volume file.
     * @param synthetic_histo Output synthetic histo volume file.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `HistoSynthesizeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(HISTO_SYNTHESIZE_METADATA);
    const params = histo_synthesize_params(mri_volume, histo_volume, synthetic_histo)
    return histo_synthesize_execute(params, execution);
}


export {
      HISTO_SYNTHESIZE_METADATA,
      HistoSynthesizeOutputs,
      HistoSynthesizeParameters,
      histo_synthesize,
      histo_synthesize_params,
};
