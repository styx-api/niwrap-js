// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_AUTO_TCORRELATE_METADATA: Metadata = {
    id: "54f323538871e62136cb28afd7fdc9c55ace001b.boutiques",
    name: "3dAutoTcorrelate",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dAutoTcorrelateParameters {
    "__STYXTYPE__": "3dAutoTcorrelate";
    "input_dataset": InputPathType;
    "pearson": boolean;
    "eta2": boolean;
    "polort"?: number | null | undefined;
    "autoclip": boolean;
    "automask": boolean;
    "mask"?: InputPathType | null | undefined;
    "mask_only_targets": boolean;
    "mask_source"?: InputPathType | null | undefined;
    "prefix"?: string | null | undefined;
    "out1d"?: string | null | undefined;
    "time": boolean;
    "mmap": boolean;
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
        "3dAutoTcorrelate": v_3d_auto_tcorrelate_cargs,
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
        "3dAutoTcorrelate": v_3d_auto_tcorrelate_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_auto_tcorrelate(...)`.
 *
 * @interface
 */
interface V3dAutoTcorrelateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Main output dataset
     */
    output_brick: OutputPathType | null;
    /**
     * Header information for main output dataset
     */
    output_head: OutputPathType | null;
    /**
     * Output in 1D text format
     */
    out1d_file: OutputPathType | null;
}


function v_3d_auto_tcorrelate_params(
    input_dataset: InputPathType,
    pearson: boolean = false,
    eta2: boolean = false,
    polort: number | null = null,
    autoclip: boolean = false,
    automask: boolean = false,
    mask: InputPathType | null = null,
    mask_only_targets: boolean = false,
    mask_source: InputPathType | null = null,
    prefix: string | null = null,
    out1d: string | null = null,
    time: boolean = false,
    mmap: boolean = false,
): V3dAutoTcorrelateParameters {
    /**
     * Build parameters.
    
     * @param input_dataset Input dataset
     * @param pearson Correlation is the normal Pearson (product moment) correlation coefficient [default]
     * @param eta2 Output is eta^2 measure from Cohen et al., NeuroImage, 2008
     * @param polort Remove polynomial trend of order 'm', for m=-1..3.
     * @param autoclip Clip off low-intensity regions in the dataset
     * @param automask Apply automask to the dataset
     * @param mask Mask of both 'source' and 'target' voxels
     * @param mask_only_targets Provide output for all voxels
     * @param mask_source Provide output for voxels only in specified mask
     * @param prefix Save output into dataset with specified prefix
     * @param out1d Save output in a text file in 1D format
     * @param time Mark output as a 3D+time dataset
     * @param mmap Write .BRIK results to disk directly using Unix mmap()
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dAutoTcorrelate" as const,
        "input_dataset": input_dataset,
        "pearson": pearson,
        "eta2": eta2,
        "autoclip": autoclip,
        "automask": automask,
        "mask_only_targets": mask_only_targets,
        "time": time,
        "mmap": mmap,
    };
    if (polort !== null) {
        params["polort"] = polort;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (mask_source !== null) {
        params["mask_source"] = mask_source;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (out1d !== null) {
        params["out1d"] = out1d;
    }
    return params;
}


function v_3d_auto_tcorrelate_cargs(
    params: V3dAutoTcorrelateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dAutoTcorrelate");
    cargs.push(execution.inputFile((params["input_dataset"] ?? null)));
    if ((params["pearson"] ?? null)) {
        cargs.push("-pearson");
    }
    if ((params["eta2"] ?? null)) {
        cargs.push("-eta2");
    }
    if ((params["polort"] ?? null) !== null) {
        cargs.push(
            "-polort",
            String((params["polort"] ?? null))
        );
    }
    if ((params["autoclip"] ?? null)) {
        cargs.push("-autoclip");
    }
    if ((params["automask"] ?? null)) {
        cargs.push("-automask");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["mask_only_targets"] ?? null)) {
        cargs.push("-mask_only_targets");
    }
    if ((params["mask_source"] ?? null) !== null) {
        cargs.push(
            "-mask_source",
            execution.inputFile((params["mask_source"] ?? null))
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["out1d"] ?? null) !== null) {
        cargs.push(
            "-out1D",
            (params["out1d"] ?? null)
        );
    }
    if ((params["time"] ?? null)) {
        cargs.push("-time");
    }
    if ((params["mmap"] ?? null)) {
        cargs.push("-mmap");
    }
    return cargs;
}


function v_3d_auto_tcorrelate_outputs(
    params: V3dAutoTcorrelateParameters,
    execution: Execution,
): V3dAutoTcorrelateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dAutoTcorrelateOutputs = {
        root: execution.outputFile("."),
        output_brick: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".BRIK"].join('')) : null,
        output_head: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".HEAD"].join('')) : null,
        out1d_file: ((params["out1d"] ?? null) !== null) ? execution.outputFile([(params["out1d"] ?? null)].join('')) : null,
    };
    return ret;
}


function v_3d_auto_tcorrelate_execute(
    params: V3dAutoTcorrelateParameters,
    execution: Execution,
): V3dAutoTcorrelateOutputs {
    /**
     * Computes the correlation coefficient between the time series of each pair of voxels in the input dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dAutoTcorrelateOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_auto_tcorrelate_cargs(params, execution)
    const ret = v_3d_auto_tcorrelate_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_auto_tcorrelate(
    input_dataset: InputPathType,
    pearson: boolean = false,
    eta2: boolean = false,
    polort: number | null = null,
    autoclip: boolean = false,
    automask: boolean = false,
    mask: InputPathType | null = null,
    mask_only_targets: boolean = false,
    mask_source: InputPathType | null = null,
    prefix: string | null = null,
    out1d: string | null = null,
    time: boolean = false,
    mmap: boolean = false,
    runner: Runner | null = null,
): V3dAutoTcorrelateOutputs {
    /**
     * Computes the correlation coefficient between the time series of each pair of voxels in the input dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_dataset Input dataset
     * @param pearson Correlation is the normal Pearson (product moment) correlation coefficient [default]
     * @param eta2 Output is eta^2 measure from Cohen et al., NeuroImage, 2008
     * @param polort Remove polynomial trend of order 'm', for m=-1..3.
     * @param autoclip Clip off low-intensity regions in the dataset
     * @param automask Apply automask to the dataset
     * @param mask Mask of both 'source' and 'target' voxels
     * @param mask_only_targets Provide output for all voxels
     * @param mask_source Provide output for voxels only in specified mask
     * @param prefix Save output into dataset with specified prefix
     * @param out1d Save output in a text file in 1D format
     * @param time Mark output as a 3D+time dataset
     * @param mmap Write .BRIK results to disk directly using Unix mmap()
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dAutoTcorrelateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_AUTO_TCORRELATE_METADATA);
    const params = v_3d_auto_tcorrelate_params(input_dataset, pearson, eta2, polort, autoclip, automask, mask, mask_only_targets, mask_source, prefix, out1d, time, mmap)
    return v_3d_auto_tcorrelate_execute(params, execution);
}


export {
      V3dAutoTcorrelateOutputs,
      V3dAutoTcorrelateParameters,
      V_3D_AUTO_TCORRELATE_METADATA,
      v_3d_auto_tcorrelate,
      v_3d_auto_tcorrelate_params,
};
