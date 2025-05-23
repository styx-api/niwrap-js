// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const PROBTRACKX_METADATA: Metadata = {
    id: "93056571f2677f5f316b19d9b37040af32b6757d.boutiques",
    name: "probtrackx",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface ProbtrackxParameters {
    "__STYXTYPE__": "probtrackx";
    "samples": InputPathType;
    "mask": InputPathType;
    "seed": InputPathType;
    "out": string;
    "verbose"?: number | null | undefined;
    "targetmasks"?: InputPathType | null | undefined;
    "mask2"?: InputPathType | null | undefined;
    "waypoints"?: InputPathType | null | undefined;
    "network": boolean;
    "mesh"?: InputPathType | null | undefined;
    "seedref"?: InputPathType | null | undefined;
    "dir"?: string | null | undefined;
    "forcedir": boolean;
    "opd": boolean;
    "pd": boolean;
    "os2t": boolean;
    "avoid"?: InputPathType | null | undefined;
    "stop"?: InputPathType | null | undefined;
    "xfm"?: InputPathType | null | undefined;
    "invxfm"?: InputPathType | null | undefined;
    "nsamples"?: number | null | undefined;
    "nsteps"?: number | null | undefined;
    "distthresh"?: number | null | undefined;
    "cthr"?: number | null | undefined;
    "fibthresh"?: number | null | undefined;
    "sampvox": boolean;
    "steplength"?: number | null | undefined;
    "loopcheck": boolean;
    "usef": boolean;
    "randfib"?: number | null | undefined;
    "fibst"?: number | null | undefined;
    "modeuler": boolean;
    "rseed"?: number | null | undefined;
    "s2tastext": boolean;
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
        "probtrackx": probtrackx_cargs,
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
 * Output object returned when calling `probtrackx(...)`.
 *
 * @interface
 */
interface ProbtrackxOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function probtrackx_params(
    samples: InputPathType,
    mask: InputPathType,
    seed: InputPathType,
    out: string = "fdt_paths",
    verbose: number | null = null,
    targetmasks: InputPathType | null = null,
    mask2: InputPathType | null = null,
    waypoints: InputPathType | null = null,
    network: boolean = false,
    mesh: InputPathType | null = null,
    seedref: InputPathType | null = null,
    dir: string | null = "logdir",
    forcedir: boolean = false,
    opd: boolean = false,
    pd: boolean = false,
    os2t: boolean = false,
    avoid: InputPathType | null = null,
    stop: InputPathType | null = null,
    xfm: InputPathType | null = null,
    invxfm: InputPathType | null = null,
    nsamples: number | null = 5000,
    nsteps: number | null = 2000,
    distthresh: number | null = 0,
    cthr: number | null = 0.2,
    fibthresh: number | null = 0.01,
    sampvox: boolean = false,
    steplength: number | null = 0.5,
    loopcheck: boolean = false,
    usef: boolean = false,
    randfib: number | null = 0,
    fibst: number | null = 1,
    modeuler: boolean = false,
    rseed: number | null = null,
    s2tastext: boolean = false,
): ProbtrackxParameters {
    /**
     * Build parameters.
    
     * @param samples Basename for samples files
     * @param mask Bet binary mask file in diffusion space
     * @param seed Seed volume, or voxel, or ascii file with multiple volumes, or freesurfer label file
     * @param out Output file (default='fdt_paths')
     * @param verbose Verbose level, [0-2]
     * @param targetmasks File containing a list of target masks - required for seeds_to_targets classification
     * @param mask2 Second mask in twomask_symm mode.
     * @param waypoints Waypoint mask or ascii list of waypoint masks - only keep paths going through ALL the masks
     * @param network Activate network mode - only keep paths going through at least one seed mask (required if multiple seed masks)
     * @param mesh Freesurfer-type surface descriptor (in ascii format)
     * @param seedref Reference vol to define seed space in simple mode - diffusion space assumed if absent
     * @param dir Directory to put the final volumes in - code makes this directory - default='logdir'
     * @param forcedir Use the actual directory name given - i.e. don't add + to make a new directory
     * @param opd Output path distribution
     * @param pd Correct path distribution for the length of the pathways
     * @param os2t Output seeds to targets
     * @param avoid Reject pathways passing through locations given by this mask
     * @param stop Stop tracking at locations given by this mask file
     * @param xfm Transform taking seed space to DTI space (either FLIRT matrix or FNIRT warpfield) - default is identity
     * @param invxfm Transform taking DTI space to seed space (compulsory when using a warpfield for seeds_to_dti)
     * @param nsamples Number of samples - default=5000
     * @param nsteps Number of steps per sample - default=2000
     * @param distthresh Discards samples shorter than this threshold (in mm - default=0)
     * @param cthr Curvature threshold - default=0.2
     * @param fibthresh Volume fraction before subsidary fibre orientations are considered - default=0.01
     * @param sampvox Sample random points within seed voxels
     * @param steplength Steplength in mm - default=0.5
     * @param loopcheck Perform loopchecks on paths - slower, but allows lower curvature threshold
     * @param usef Use anisotropy to constrain tracking
     * @param randfib Default 0. Set to 1 to randomly sample initial fibres (with f > fibthresh). Set to 2 to sample in proportion fibres (with f>fibthresh) to f. Set to 3 to sample ALL populations at random (even if f<fibthresh)
     * @param fibst Force a starting fibre for tracking - default=1, i.e. first fibre orientation. Only works if randfib==0
     * @param modeuler Use modified euler streamlining
     * @param rseed Random seed
     * @param s2tastext Output seed-to-target counts as a text file (useful when seeding from a mesh)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "probtrackx" as const,
        "samples": samples,
        "mask": mask,
        "seed": seed,
        "out": out,
        "network": network,
        "forcedir": forcedir,
        "opd": opd,
        "pd": pd,
        "os2t": os2t,
        "sampvox": sampvox,
        "loopcheck": loopcheck,
        "usef": usef,
        "modeuler": modeuler,
        "s2tastext": s2tastext,
    };
    if (verbose !== null) {
        params["verbose"] = verbose;
    }
    if (targetmasks !== null) {
        params["targetmasks"] = targetmasks;
    }
    if (mask2 !== null) {
        params["mask2"] = mask2;
    }
    if (waypoints !== null) {
        params["waypoints"] = waypoints;
    }
    if (mesh !== null) {
        params["mesh"] = mesh;
    }
    if (seedref !== null) {
        params["seedref"] = seedref;
    }
    if (dir !== null) {
        params["dir"] = dir;
    }
    if (avoid !== null) {
        params["avoid"] = avoid;
    }
    if (stop !== null) {
        params["stop"] = stop;
    }
    if (xfm !== null) {
        params["xfm"] = xfm;
    }
    if (invxfm !== null) {
        params["invxfm"] = invxfm;
    }
    if (nsamples !== null) {
        params["nsamples"] = nsamples;
    }
    if (nsteps !== null) {
        params["nsteps"] = nsteps;
    }
    if (distthresh !== null) {
        params["distthresh"] = distthresh;
    }
    if (cthr !== null) {
        params["cthr"] = cthr;
    }
    if (fibthresh !== null) {
        params["fibthresh"] = fibthresh;
    }
    if (steplength !== null) {
        params["steplength"] = steplength;
    }
    if (randfib !== null) {
        params["randfib"] = randfib;
    }
    if (fibst !== null) {
        params["fibst"] = fibst;
    }
    if (rseed !== null) {
        params["rseed"] = rseed;
    }
    return params;
}


function probtrackx_cargs(
    params: ProbtrackxParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("probtrackx");
    cargs.push(
        "-s",
        execution.inputFile((params["samples"] ?? null))
    );
    cargs.push(
        "-m",
        execution.inputFile((params["mask"] ?? null))
    );
    cargs.push(
        "-x",
        execution.inputFile((params["seed"] ?? null))
    );
    cargs.push(
        "-o",
        (params["out"] ?? null)
    );
    if ((params["verbose"] ?? null) !== null) {
        cargs.push(
            "--verbose",
            String((params["verbose"] ?? null))
        );
    }
    if ((params["targetmasks"] ?? null) !== null) {
        cargs.push(
            "--targetmasks",
            execution.inputFile((params["targetmasks"] ?? null))
        );
    }
    if ((params["mask2"] ?? null) !== null) {
        cargs.push(
            "--mask2",
            execution.inputFile((params["mask2"] ?? null))
        );
    }
    if ((params["waypoints"] ?? null) !== null) {
        cargs.push(
            "--waypoints",
            execution.inputFile((params["waypoints"] ?? null))
        );
    }
    if ((params["network"] ?? null)) {
        cargs.push("--network");
    }
    if ((params["mesh"] ?? null) !== null) {
        cargs.push(
            "--mesh",
            execution.inputFile((params["mesh"] ?? null))
        );
    }
    if ((params["seedref"] ?? null) !== null) {
        cargs.push(
            "--seedref",
            execution.inputFile((params["seedref"] ?? null))
        );
    }
    if ((params["dir"] ?? null) !== null) {
        cargs.push(
            "--dir",
            (params["dir"] ?? null)
        );
    }
    if ((params["forcedir"] ?? null)) {
        cargs.push("--forcedir");
    }
    if ((params["opd"] ?? null)) {
        cargs.push("--opd");
    }
    if ((params["pd"] ?? null)) {
        cargs.push("--pd");
    }
    if ((params["os2t"] ?? null)) {
        cargs.push("--os2t");
    }
    if ((params["avoid"] ?? null) !== null) {
        cargs.push(
            "--avoid",
            execution.inputFile((params["avoid"] ?? null))
        );
    }
    if ((params["stop"] ?? null) !== null) {
        cargs.push(
            "--stop",
            execution.inputFile((params["stop"] ?? null))
        );
    }
    if ((params["xfm"] ?? null) !== null) {
        cargs.push(
            "--xfm",
            execution.inputFile((params["xfm"] ?? null))
        );
    }
    if ((params["invxfm"] ?? null) !== null) {
        cargs.push(
            "--invxfm",
            execution.inputFile((params["invxfm"] ?? null))
        );
    }
    if ((params["nsamples"] ?? null) !== null) {
        cargs.push(
            "-P",
            String((params["nsamples"] ?? null))
        );
    }
    if ((params["nsteps"] ?? null) !== null) {
        cargs.push(
            "-S",
            String((params["nsteps"] ?? null))
        );
    }
    if ((params["distthresh"] ?? null) !== null) {
        cargs.push(
            "--distthresh",
            String((params["distthresh"] ?? null))
        );
    }
    if ((params["cthr"] ?? null) !== null) {
        cargs.push(
            "-c",
            String((params["cthr"] ?? null))
        );
    }
    if ((params["fibthresh"] ?? null) !== null) {
        cargs.push(
            "--fibthresh",
            String((params["fibthresh"] ?? null))
        );
    }
    if ((params["sampvox"] ?? null)) {
        cargs.push("--sampvox");
    }
    if ((params["steplength"] ?? null) !== null) {
        cargs.push(
            "--steplength",
            String((params["steplength"] ?? null))
        );
    }
    if ((params["loopcheck"] ?? null)) {
        cargs.push("-l");
    }
    if ((params["usef"] ?? null)) {
        cargs.push("-f");
    }
    if ((params["randfib"] ?? null) !== null) {
        cargs.push(
            "--randfib",
            String((params["randfib"] ?? null))
        );
    }
    if ((params["fibst"] ?? null) !== null) {
        cargs.push(
            "--fibst",
            String((params["fibst"] ?? null))
        );
    }
    if ((params["modeuler"] ?? null)) {
        cargs.push("--modeuler");
    }
    if ((params["rseed"] ?? null) !== null) {
        cargs.push(
            "--rseed",
            String((params["rseed"] ?? null))
        );
    }
    if ((params["s2tastext"] ?? null)) {
        cargs.push("--s2tastext");
    }
    return cargs;
}


function probtrackx_outputs(
    params: ProbtrackxParameters,
    execution: Execution,
): ProbtrackxOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ProbtrackxOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function probtrackx_execute(
    params: ProbtrackxParameters,
    execution: Execution,
): ProbtrackxOutputs {
    /**
     * Streamlines tracking algorithm for probabilistic tractography.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ProbtrackxOutputs`).
     */
    params = execution.params(params)
    const cargs = probtrackx_cargs(params, execution)
    const ret = probtrackx_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function probtrackx(
    samples: InputPathType,
    mask: InputPathType,
    seed: InputPathType,
    out: string = "fdt_paths",
    verbose: number | null = null,
    targetmasks: InputPathType | null = null,
    mask2: InputPathType | null = null,
    waypoints: InputPathType | null = null,
    network: boolean = false,
    mesh: InputPathType | null = null,
    seedref: InputPathType | null = null,
    dir: string | null = "logdir",
    forcedir: boolean = false,
    opd: boolean = false,
    pd: boolean = false,
    os2t: boolean = false,
    avoid: InputPathType | null = null,
    stop: InputPathType | null = null,
    xfm: InputPathType | null = null,
    invxfm: InputPathType | null = null,
    nsamples: number | null = 5000,
    nsteps: number | null = 2000,
    distthresh: number | null = 0,
    cthr: number | null = 0.2,
    fibthresh: number | null = 0.01,
    sampvox: boolean = false,
    steplength: number | null = 0.5,
    loopcheck: boolean = false,
    usef: boolean = false,
    randfib: number | null = 0,
    fibst: number | null = 1,
    modeuler: boolean = false,
    rseed: number | null = null,
    s2tastext: boolean = false,
    runner: Runner | null = null,
): ProbtrackxOutputs {
    /**
     * Streamlines tracking algorithm for probabilistic tractography.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param samples Basename for samples files
     * @param mask Bet binary mask file in diffusion space
     * @param seed Seed volume, or voxel, or ascii file with multiple volumes, or freesurfer label file
     * @param out Output file (default='fdt_paths')
     * @param verbose Verbose level, [0-2]
     * @param targetmasks File containing a list of target masks - required for seeds_to_targets classification
     * @param mask2 Second mask in twomask_symm mode.
     * @param waypoints Waypoint mask or ascii list of waypoint masks - only keep paths going through ALL the masks
     * @param network Activate network mode - only keep paths going through at least one seed mask (required if multiple seed masks)
     * @param mesh Freesurfer-type surface descriptor (in ascii format)
     * @param seedref Reference vol to define seed space in simple mode - diffusion space assumed if absent
     * @param dir Directory to put the final volumes in - code makes this directory - default='logdir'
     * @param forcedir Use the actual directory name given - i.e. don't add + to make a new directory
     * @param opd Output path distribution
     * @param pd Correct path distribution for the length of the pathways
     * @param os2t Output seeds to targets
     * @param avoid Reject pathways passing through locations given by this mask
     * @param stop Stop tracking at locations given by this mask file
     * @param xfm Transform taking seed space to DTI space (either FLIRT matrix or FNIRT warpfield) - default is identity
     * @param invxfm Transform taking DTI space to seed space (compulsory when using a warpfield for seeds_to_dti)
     * @param nsamples Number of samples - default=5000
     * @param nsteps Number of steps per sample - default=2000
     * @param distthresh Discards samples shorter than this threshold (in mm - default=0)
     * @param cthr Curvature threshold - default=0.2
     * @param fibthresh Volume fraction before subsidary fibre orientations are considered - default=0.01
     * @param sampvox Sample random points within seed voxels
     * @param steplength Steplength in mm - default=0.5
     * @param loopcheck Perform loopchecks on paths - slower, but allows lower curvature threshold
     * @param usef Use anisotropy to constrain tracking
     * @param randfib Default 0. Set to 1 to randomly sample initial fibres (with f > fibthresh). Set to 2 to sample in proportion fibres (with f>fibthresh) to f. Set to 3 to sample ALL populations at random (even if f<fibthresh)
     * @param fibst Force a starting fibre for tracking - default=1, i.e. first fibre orientation. Only works if randfib==0
     * @param modeuler Use modified euler streamlining
     * @param rseed Random seed
     * @param s2tastext Output seed-to-target counts as a text file (useful when seeding from a mesh)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ProbtrackxOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(PROBTRACKX_METADATA);
    const params = probtrackx_params(samples, mask, seed, out, verbose, targetmasks, mask2, waypoints, network, mesh, seedref, dir, forcedir, opd, pd, os2t, avoid, stop, xfm, invxfm, nsamples, nsteps, distthresh, cthr, fibthresh, sampvox, steplength, loopcheck, usef, randfib, fibst, modeuler, rseed, s2tastext)
    return probtrackx_execute(params, execution);
}


export {
      PROBTRACKX_METADATA,
      ProbtrackxOutputs,
      ProbtrackxParameters,
      probtrackx,
      probtrackx_params,
};
