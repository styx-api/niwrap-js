// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DMERGE_METADATA: Metadata = {
    id: "b4bc137cd47dc951a1ce4996b1bce347a13b1474.boutiques",
    name: "3dmerge",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dmergeParameters {
    "__STYXTYPE__": "3dmerge";
    "input_files": Array<InputPathType>;
    "output_file": string;
    "blur_fwhm"?: number | null | undefined;
    "threshold"?: number | null | undefined;
    "clust"?: Array<number> | null | undefined;
    "dindex"?: number | null | undefined;
    "tindex"?: number | null | undefined;
    "absolute": boolean;
    "dxyz": boolean;
    "gmean": boolean;
    "gmax": boolean;
    "quiet": boolean;
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
        "3dmerge": v_3dmerge_cargs,
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
        "3dmerge": v_3dmerge_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dmerge(...)`.
 *
 * @interface
 */
interface V3dmergeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset file
     */
    output_dataset: OutputPathType;
}


function v_3dmerge_params(
    input_files: Array<InputPathType>,
    output_file: string,
    blur_fwhm: number | null = null,
    threshold: number | null = null,
    clust: Array<number> | null = null,
    dindex: number | null = null,
    tindex: number | null = null,
    absolute: boolean = false,
    dxyz: boolean = false,
    gmean: boolean = false,
    gmax: boolean = false,
    quiet: boolean = false,
): V3dmergeParameters {
    /**
     * Build parameters.
    
     * @param input_files Input dataset files
     * @param output_file Output dataset prefix
     * @param blur_fwhm Gaussian blur with FWHM in mm
     * @param threshold Threshold data to censor the intensities; only valid for 'fith', 'fico', or 'fitt' datasets
     * @param clust Form clusters with connection distance and clip off data not in clusters of a minimum volume
     * @param dindex Specify sub-brick #j as the data source
     * @param tindex Specify sub-brick #k as the threshold source
     * @param absolute Take absolute values of intensities
     * @param dxyz Force cluster editing to behave as if all voxel dimensions were set to 1 mm
     * @param gmean Combine datasets by averaging intensities (default)
     * @param gmax Combine datasets by taking max intensity
     * @param quiet Reduce the number of messages shown
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dmerge" as const,
        "input_files": input_files,
        "output_file": output_file,
        "absolute": absolute,
        "dxyz": dxyz,
        "gmean": gmean,
        "gmax": gmax,
        "quiet": quiet,
    };
    if (blur_fwhm !== null) {
        params["blur_fwhm"] = blur_fwhm;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (clust !== null) {
        params["clust"] = clust;
    }
    if (dindex !== null) {
        params["dindex"] = dindex;
    }
    if (tindex !== null) {
        params["tindex"] = tindex;
    }
    return params;
}


function v_3dmerge_cargs(
    params: V3dmergeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dmerge");
    cargs.push(...(params["input_files"] ?? null).map(f => execution.inputFile(f)));
    cargs.push(
        "-prefix",
        (params["output_file"] ?? null)
    );
    if ((params["blur_fwhm"] ?? null) !== null) {
        cargs.push(
            "-1blur_fwhm",
            String((params["blur_fwhm"] ?? null))
        );
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "-1thresh",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["clust"] ?? null) !== null) {
        cargs.push(
            "-1clust",
            ...(params["clust"] ?? null).map(String)
        );
    }
    if ((params["dindex"] ?? null) !== null) {
        cargs.push(
            "-1dindex",
            String((params["dindex"] ?? null))
        );
    }
    if ((params["tindex"] ?? null) !== null) {
        cargs.push(
            "-1tindex",
            String((params["tindex"] ?? null))
        );
    }
    if ((params["absolute"] ?? null)) {
        cargs.push("-1abs");
    }
    if ((params["dxyz"] ?? null)) {
        cargs.push("-dxyz=1");
    }
    if ((params["gmean"] ?? null)) {
        cargs.push("-gmean");
    }
    if ((params["gmax"] ?? null)) {
        cargs.push("-gmax");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    return cargs;
}


function v_3dmerge_outputs(
    params: V3dmergeParameters,
    execution: Execution,
): V3dmergeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dmergeOutputs = {
        root: execution.outputFile("."),
        output_dataset: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function v_3dmerge_execute(
    params: V3dmergeParameters,
    execution: Execution,
): V3dmergeOutputs {
    /**
     * 3dmerge edits and merges 3D datasets by applying various operations like thresholding, blurring, clustering, and more.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dmergeOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dmerge_cargs(params, execution)
    const ret = v_3dmerge_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dmerge(
    input_files: Array<InputPathType>,
    output_file: string,
    blur_fwhm: number | null = null,
    threshold: number | null = null,
    clust: Array<number> | null = null,
    dindex: number | null = null,
    tindex: number | null = null,
    absolute: boolean = false,
    dxyz: boolean = false,
    gmean: boolean = false,
    gmax: boolean = false,
    quiet: boolean = false,
    runner: Runner | null = null,
): V3dmergeOutputs {
    /**
     * 3dmerge edits and merges 3D datasets by applying various operations like thresholding, blurring, clustering, and more.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files Input dataset files
     * @param output_file Output dataset prefix
     * @param blur_fwhm Gaussian blur with FWHM in mm
     * @param threshold Threshold data to censor the intensities; only valid for 'fith', 'fico', or 'fitt' datasets
     * @param clust Form clusters with connection distance and clip off data not in clusters of a minimum volume
     * @param dindex Specify sub-brick #j as the data source
     * @param tindex Specify sub-brick #k as the threshold source
     * @param absolute Take absolute values of intensities
     * @param dxyz Force cluster editing to behave as if all voxel dimensions were set to 1 mm
     * @param gmean Combine datasets by averaging intensities (default)
     * @param gmax Combine datasets by taking max intensity
     * @param quiet Reduce the number of messages shown
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dmergeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DMERGE_METADATA);
    const params = v_3dmerge_params(input_files, output_file, blur_fwhm, threshold, clust, dindex, tindex, absolute, dxyz, gmean, gmax, quiet)
    return v_3dmerge_execute(params, execution);
}


export {
      V3dmergeOutputs,
      V3dmergeParameters,
      V_3DMERGE_METADATA,
      v_3dmerge,
      v_3dmerge_params,
};
