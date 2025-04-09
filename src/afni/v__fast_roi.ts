// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__FAST_ROI_METADATA: Metadata = {
    id: "d18cbef8d851f59f23b93093ca933ae2433a09f2.boutiques",
    name: "@fast_roi",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VFastRoiParameters {
    "__STYXTYPE__": "@fast_roi";
    "region": Array<string>;
    "drawn_roi"?: InputPathType | null | undefined;
    "anat": InputPathType;
    "anat_ns"?: InputPathType | null | undefined;
    "base": InputPathType;
    "roi_grid": InputPathType;
    "prefix": string;
    "time": boolean;
    "twopass": boolean;
    "help": boolean;
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
        "@fast_roi": v__fast_roi_cargs,
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
        "@fast_roi": v__fast_roi_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__fast_roi(...)`.
 *
 * @interface
 */
interface VFastRoiOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * ROI output volume with the specified prefix.
     */
    roi_output: OutputPathType;
}


function v__fast_roi_params(
    region: Array<string>,
    anat: InputPathType,
    base: InputPathType,
    roi_grid: InputPathType,
    prefix: string,
    drawn_roi: InputPathType | null = null,
    anat_ns: InputPathType | null = null,
    time: boolean = false,
    twopass: boolean = false,
    help: boolean = false,
): VFastRoiParameters {
    /**
     * Build parameters.
    
     * @param region Symbolic atlas-based region name. Use repeated instances to specify a mask of numerous regions. Each region is assigned a power of 2 integer in the output mask.
     * @param anat ANAT is the volume to be put in standard space. If ANAT is already in TLRC space, there is no need for -base option.
     * @param base Name of the reference TLRC volume.
     * @param roi_grid The volume that defines the final ROI's grid.
     * @param prefix Prefix used to tag the names the ROIs output.
     * @param drawn_roi A user drawn ROI in standard (tlrc) space. This ROI gets added with the REGION ROI.
     * @param anat_ns Same as -anat, but indicates that the skull has been removed already.
     * @param time Output elapsed time reports.
     * @param twopass Make TLRC transformation more robust. Use it if TLRC transform step fails.
     * @param help Output help message.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@fast_roi" as const,
        "region": region,
        "anat": anat,
        "base": base,
        "roi_grid": roi_grid,
        "prefix": prefix,
        "time": time,
        "twopass": twopass,
        "help": help,
    };
    if (drawn_roi !== null) {
        params["drawn_roi"] = drawn_roi;
    }
    if (anat_ns !== null) {
        params["anat_ns"] = anat_ns;
    }
    return params;
}


function v__fast_roi_cargs(
    params: VFastRoiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@fast_roi");
    cargs.push(
        "-region",
        ...(params["region"] ?? null)
    );
    if ((params["drawn_roi"] ?? null) !== null) {
        cargs.push(
            "-drawn_roi",
            execution.inputFile((params["drawn_roi"] ?? null))
        );
    }
    cargs.push(
        "-anat",
        execution.inputFile((params["anat"] ?? null))
    );
    if ((params["anat_ns"] ?? null) !== null) {
        cargs.push(
            "-anat_ns",
            execution.inputFile((params["anat_ns"] ?? null))
        );
    }
    cargs.push(
        "-base",
        execution.inputFile((params["base"] ?? null))
    );
    cargs.push(
        "-roi_grid",
        execution.inputFile((params["roi_grid"] ?? null))
    );
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["time"] ?? null)) {
        cargs.push("--time");
    }
    if ((params["twopass"] ?? null)) {
        cargs.push("--twopass");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function v__fast_roi_outputs(
    params: VFastRoiParameters,
    execution: Execution,
): VFastRoiOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VFastRoiOutputs = {
        root: execution.outputFile("."),
        roi_output: execution.outputFile(["ROI.", (params["prefix"] ?? null), "+orig"].join('')),
    };
    return ret;
}


function v__fast_roi_execute(
    params: VFastRoiParameters,
    execution: Execution,
): VFastRoiOutputs {
    /**
     * Creates Atlas-based ROI masked in ANAT's original space. The script executes rapidly for realtime fMRI applications.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VFastRoiOutputs`).
     */
    params = execution.params(params)
    const cargs = v__fast_roi_cargs(params, execution)
    const ret = v__fast_roi_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__fast_roi(
    region: Array<string>,
    anat: InputPathType,
    base: InputPathType,
    roi_grid: InputPathType,
    prefix: string,
    drawn_roi: InputPathType | null = null,
    anat_ns: InputPathType | null = null,
    time: boolean = false,
    twopass: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): VFastRoiOutputs {
    /**
     * Creates Atlas-based ROI masked in ANAT's original space. The script executes rapidly for realtime fMRI applications.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param region Symbolic atlas-based region name. Use repeated instances to specify a mask of numerous regions. Each region is assigned a power of 2 integer in the output mask.
     * @param anat ANAT is the volume to be put in standard space. If ANAT is already in TLRC space, there is no need for -base option.
     * @param base Name of the reference TLRC volume.
     * @param roi_grid The volume that defines the final ROI's grid.
     * @param prefix Prefix used to tag the names the ROIs output.
     * @param drawn_roi A user drawn ROI in standard (tlrc) space. This ROI gets added with the REGION ROI.
     * @param anat_ns Same as -anat, but indicates that the skull has been removed already.
     * @param time Output elapsed time reports.
     * @param twopass Make TLRC transformation more robust. Use it if TLRC transform step fails.
     * @param help Output help message.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VFastRoiOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__FAST_ROI_METADATA);
    const params = v__fast_roi_params(region, anat, base, roi_grid, prefix, drawn_roi, anat_ns, time, twopass, help)
    return v__fast_roi_execute(params, execution);
}


export {
      VFastRoiOutputs,
      VFastRoiParameters,
      V__FAST_ROI_METADATA,
      v__fast_roi,
      v__fast_roi_params,
};
