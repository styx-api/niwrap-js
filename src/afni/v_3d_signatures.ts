// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_SIGNATURES_METADATA: Metadata = {
    id: "e20b04fdf19b18d2e6f8de7dfa09276b1b35f130.boutiques",
    name: "3dSignatures",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dSignaturesParameters {
    "__STYXTYPE__": "3dSignatures";
    "infile": InputPathType;
    "outfile": string;
    "segmentation": boolean;
    "filter": boolean;
    "threshold"?: number | null | undefined;
    "smoothing"?: number | null | undefined;
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
        "3dSignatures": v_3d_signatures_cargs,
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
        "3dSignatures": v_3d_signatures_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_signatures(...)`.
 *
 * @interface
 */
interface V3dSignaturesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Main analysis results file
     */
    results_file: OutputPathType;
}


function v_3d_signatures_params(
    infile: InputPathType,
    outfile: string,
    segmentation: boolean = false,
    filter: boolean = false,
    threshold: number | null = null,
    smoothing: number | null = null,
): V3dSignaturesParameters {
    /**
     * Build parameters.
    
     * @param infile Input file containing 3D genome data (e.g. genome_data.txt)
     * @param outfile Output file to store analysis results (e.g. analysis_results.txt)
     * @param segmentation Flag to apply genome segmentation
     * @param filter Flag to apply data filtering
     * @param threshold Threshold level for data filtering; default=0.5
     * @param smoothing Apply smoothing with specified kernel size
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dSignatures" as const,
        "infile": infile,
        "outfile": outfile,
        "segmentation": segmentation,
        "filter": filter,
    };
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (smoothing !== null) {
        params["smoothing"] = smoothing;
    }
    return params;
}


function v_3d_signatures_cargs(
    params: V3dSignaturesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dSignatures");
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    cargs.push((params["outfile"] ?? null));
    if ((params["segmentation"] ?? null)) {
        cargs.push("--segmentation");
    }
    if ((params["filter"] ?? null)) {
        cargs.push("--filter");
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "--threshold",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["smoothing"] ?? null) !== null) {
        cargs.push(
            "--smoothing",
            String((params["smoothing"] ?? null))
        );
    }
    return cargs;
}


function v_3d_signatures_outputs(
    params: V3dSignaturesParameters,
    execution: Execution,
): V3dSignaturesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dSignaturesOutputs = {
        root: execution.outputFile("."),
        results_file: execution.outputFile([(params["outfile"] ?? null), ".txt"].join('')),
    };
    return ret;
}


function v_3d_signatures_execute(
    params: V3dSignaturesParameters,
    execution: Execution,
): V3dSignaturesOutputs {
    /**
     * 3dSignatures analysis tool for 3D genome organization.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dSignaturesOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_signatures_cargs(params, execution)
    const ret = v_3d_signatures_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_signatures(
    infile: InputPathType,
    outfile: string,
    segmentation: boolean = false,
    filter: boolean = false,
    threshold: number | null = null,
    smoothing: number | null = null,
    runner: Runner | null = null,
): V3dSignaturesOutputs {
    /**
     * 3dSignatures analysis tool for 3D genome organization.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param infile Input file containing 3D genome data (e.g. genome_data.txt)
     * @param outfile Output file to store analysis results (e.g. analysis_results.txt)
     * @param segmentation Flag to apply genome segmentation
     * @param filter Flag to apply data filtering
     * @param threshold Threshold level for data filtering; default=0.5
     * @param smoothing Apply smoothing with specified kernel size
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dSignaturesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_SIGNATURES_METADATA);
    const params = v_3d_signatures_params(infile, outfile, segmentation, filter, threshold, smoothing)
    return v_3d_signatures_execute(params, execution);
}


export {
      V3dSignaturesOutputs,
      V3dSignaturesParameters,
      V_3D_SIGNATURES_METADATA,
      v_3d_signatures,
      v_3d_signatures_params,
};
